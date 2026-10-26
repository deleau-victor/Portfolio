// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { locales, defaultLocale } from "./src/i18n/config.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://coresync.fr",
  // `[lang]/404.astro` -> `fr/404.html` (not `fr/404/index.html`): Cloudflare Pages serves the closest 404.html.
  build: { format: "preserve" },
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
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
