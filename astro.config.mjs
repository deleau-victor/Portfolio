// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { locales, defaultLocale } from "./src/i18n/config.ts";

/** @param {string} url */
const withHomeSlash = (url) => url.replace(new RegExp(`/(${locales.join("|")})$`), "/$1/");

// https://astro.build/config
export default defineConfig({
  site: "https://coresync.fr",
  build: { format: "preserve" },
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return pathname !== "/" && !/\/404(\.html)?\/?$/.test(pathname);
      },
      i18n: { defaultLocale, locales: Object.fromEntries(locales.map((locale) => [locale, locale])) },
      serialize: (item) => ({
        ...item,
        url: withHomeSlash(item.url),
        links: item.links?.map((link) => ({ ...link, url: withHomeSlash(link.url) })),
      }),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Albert Sans",
      cssVariable: "--font-albert-sans",
      weights: ["100 900"],
      fallbacks: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "DM Mono",
      cssVariable: "--font-dm-mono",
      weights: ["400", "500"],
      fallbacks: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
    },
  ],
});
