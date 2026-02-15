import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://francescobrador.com",
  integrations: [tailwind(), icon(), sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "ca"],
    routing: {
      prefixDefault: false
    }
  },
  devOptions: {
    port: process.env.PORT | 3000,
    host: '0.0.0.0',
  }
});