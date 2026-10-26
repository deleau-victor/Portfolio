import { defaultLocale, type Locale } from "@/i18n/config";
import enHref from "@/assets/Victor_Deleau_Senior_NET_Backend_Engineer.pdf?url";
import frHref from "@/assets/Victor_Deleau_Ingenieur_Backend_NET_Senior.pdf?url";
import esHref from "@/assets/Victor_Deleau_Ingeniero_Backend_NET_Senior.pdf?url";

interface Cv {
  locale: Locale;
  href: string;
  filename: string;
}

/**
 * Available CVs, one per locale.
 */
const cvs: Cv[] = [
  {
    locale: "en",
    href: enHref,
    filename: "Victor_Deleau_Senior_NET_Backend_Engineer.pdf",
  },
  {
    locale: "fr",
    href: frHref,
    filename: "Victor_Deleau_Ingenieur_Backend_NET_Senior.pdf",
  },
  {
    locale: "es",
    href: esHref,
    filename: "Victor_Deleau_Ingeniero_Backend_NET_Senior.pdf",
  },
];

/**
 * Return the right cv for the right locale
 * @param locale The page locale, default to the default locale
 * @returns The CV in the desired locale
 */
const getMainCv = (locale: Locale = defaultLocale): Cv | undefined => {
  return cvs.find((cv) => cv.locale === locale);
};

export { cvs, getMainCv };
