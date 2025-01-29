import { primevue } from "./app/primevue";

const modules = ["@primevue/nuxt-module", "@nuxtjs/tailwindcss", "@nuxt/image"];
const css = ["~/assets/main.scss"];

export default defineNuxtConfig({
  compatibilityDate: "2025-01-29",
  devtools: { enabled: true },
  modules,
  css,
  primevue,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
