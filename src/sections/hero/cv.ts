import { existsSync } from "node:fs";
import { defaultLocale, type Locale } from "@/i18n/config";

interface Cv {
  locale: Locale;
  href: string;
  filename: string;
}

const CV_DIRECTORY = "cv";

/**
 * Available CVs, one per locale.
 */
const cvs: Cv[] = [
  { locale: "en", filename: "Victor_Deleau_Senior_NET_Backend_Engineer.pdf" },
  { locale: "fr", filename: "Victor_Deleau_Ingenieur_Backend_NET_Senior.pdf" },
  { locale: "es", filename: "Victor_Deleau_Ingeniero_Backend_NET_Senior.pdf" },
].map(({ locale, filename }) => {
  if (!existsSync(`public/${CV_DIRECTORY}/${filename}`)) {
    throw new Error(`CV not found: public/${CV_DIRECTORY}/${filename}`);
  }
  return { locale: locale as Locale, filename, href: `/${CV_DIRECTORY}/${filename}` };
});

/**
 * Return the right cv for the right locale
 * @param locale The page locale, default to the default locale
 * @returns The CV in the desired locale
 */
const getMainCv = (locale: Locale = defaultLocale): Cv | undefined => {
  return cvs.find((cv) => cv.locale === locale);
};

export { cvs, getMainCv };
