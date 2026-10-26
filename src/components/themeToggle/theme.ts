/**
 * Available themes
 */
const themes = ["light", "dark"] as const;
type Theme = (typeof themes)[number];

// localStorage key for the theme
const THEME_STORAGE_KEY = "theme";

export { themes, THEME_STORAGE_KEY };
export type { Theme };
