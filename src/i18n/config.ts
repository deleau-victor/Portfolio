/**
 * Available locales.
 */
const locales = ["fr", "en", "es"] as const;
type Locale = (typeof locales)[number];

// Default locale to use when no preferred locale is set or there is no browser's locale usable.
const defaultLocale: Locale = "en";

const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
};

/**
 * Checks that a value is one of the available locales.
 * @param value The actual value you want to check.
 * @returns True if the value is a supported locale.
 */
const isLocale = (value: string | null | undefined): value is Locale =>
  value != null && (locales as readonly string[]).includes(value);

export { locales, defaultLocale, localeNames, isLocale };
export type { Locale };
