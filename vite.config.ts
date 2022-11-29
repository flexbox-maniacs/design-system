import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@theme": fileURLToPath(
        new URL("./node_modules/theme-default/scss/main.scss", import.meta.url)
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./node_modules/theme-default/scss/mixins/breakpoints.scss";`,
      },
    },
  },
});
