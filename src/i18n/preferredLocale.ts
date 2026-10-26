import { defaultLocale, isLocale, type Locale } from "./config";

const PREFERRED_LOCALE_STORAGE_KEY = "preferredLocale";

/**
 * If a preferred locale is stored, return it.
 * Otherwise, return the user browser's locale, or the default locale.
 * @returns The preferred locale, browser locale, or default locale.
 */
const getPreferredLocale = (): Locale => {
  let storedLocale: string | null = null;
  try {
    storedLocale = localStorage.getItem(PREFERRED_LOCALE_STORAGE_KEY);
  } catch {}
  if (isLocale(storedLocale)) {
    return storedLocale;
  }

  const browserLocale = navigator.languages.map((lang) => lang.split("-")[0].toLowerCase()).find(isLocale);
  return browserLocale ?? defaultLocale;
};

/**
 * Remembers the locale chosen by the visitor.
 * @param locale The locale to store.
 */
const setPreferredLocale = (locale: Locale): void => {
  try {
    localStorage.setItem(PREFERRED_LOCALE_STORAGE_KEY, locale);
  } catch {}
};

export { PREFERRED_LOCALE_STORAGE_KEY, getPreferredLocale, setPreferredLocale };
