import type { APIRoute } from "astro";

// Generated, so the sitemap URL follows `site` from the Astro config.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).href}\n`);
