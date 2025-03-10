import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  outDir: "./dist",
  devOptions: {
    port: process.env.PORT | 3000,
    host: '0.0.0.0',
  }
});
