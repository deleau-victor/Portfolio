import { defaultLocale, isLocale, type Locale } from "./config";
import { ui, type UiKey } from "./ui";

/**
 * Resolves the locale of the current page.
 * @param currentLocale `Astro.currentLocale`, taken from the URL.
 * @returns The current locale, or the default one outside localized routes.
 */
const getCurrentLocale = (currentLocale: string | undefined): Locale =>
  isLocale(currentLocale) ? currentLocale : defaultLocale;

/**
 * Returns the same path in another locale: `/fr/projects/foo` -> `/en/projects/foo`.
 * @param pathname A path, with or without a locale prefix.
 * @param locale The target locale.
 * @returns The path prefixed with the target locale.
 */
const getLocalizedPath = (pathname: string, locale: Locale): string => {
  const [, firstSegment = "", ...otherSegments] = pathname.split("/");
  const segments = isLocale(firstSegment) ? otherSegments : [firstSegment, ...otherSegments];
  return `/${[locale, ...segments].join("/")}`;
};

/**
 * Returns a translation function bound to a locale.
 * @param locale The locale to translate into.
 * @returns The `t(key)` function, giving the UI string for that key.
 */
const useTranslations =
  (locale: Locale) =>
  (key: UiKey): string =>
    ui[locale][key];

export { getCurrentLocale, getLocalizedPath, useTranslations };
