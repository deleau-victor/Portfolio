/**
 * Turns a button and a list of links into an accessible dropdown menu :
 * - click or arrow keys to open,
 * - arrows to move
 * - escape to close
 * - closes on outside click.
 * The menu is shown with its `hidden` attribute, and the button state is exposed with `aria-expanded`.
 * @param root The element holding both the trigger and the menu, used to detect outside clicks.
 * @param trigger The button opening the menu.
 * @param menu The list of links.
 */
const setupDropdownMenu = (root: HTMLElement, trigger: HTMLButtonElement, menu: HTMLElement): void => {
  // Links without href -> keyboard navigation skips them.
  const items = Array.from(menu.querySelectorAll<HTMLAnchorElement>("a[href]"));

  // METHODS //
  const open = (focusCurrent: boolean): void => {
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    if (focusCurrent) {
      (items.find((item) => item.hasAttribute("aria-current")) ?? items[0])?.focus();
    }
  };

  const close = (returnFocus: boolean): void => {
    if (menu.hidden) {
      return;
    }
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (returnFocus) {
      trigger.focus();
    }
  };

  // EVENTS HANDLING //
  trigger.addEventListener("click", () => (menu.hidden ? open(false) : close(false)));
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      open(true);
    }
  });

  menu.addEventListener("keydown", (event) => {
    const index = items.indexOf(document.activeElement as HTMLAnchorElement);
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        items[(index + 1) % items.length]?.focus();
        break;
      case "ArrowUp":
        event.preventDefault();
        items[(index - 1 + items.length) % items.length]?.focus();
        break;
      case "Escape":
        event.preventDefault();
        close(true);
        break;
      case "Tab":
        close(false);
        break;
    }
  });

  // Properly close the menu
  items.forEach((item) => item.addEventListener("click", () => close(false)));
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target as Node)) {
      close(false);
    }
  });
};

export { setupDropdownMenu };
