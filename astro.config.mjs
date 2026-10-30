// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: replace with the production domain once it is bought.
const SITE = "https://wereplyfirst.com";

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  i18n: {
    locales: ["ru", "kk", "en"],
    defaultLocale: "ru",
    routing: { prefixDefaultLocale: false },
  },
});
