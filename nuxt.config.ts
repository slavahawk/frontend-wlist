import { primevue } from "./app/primevue";
import tailwindcss from "@tailwindcss/vite";

const modules = ["@primevue/nuxt-module", "@nuxt/image"];
const css = ["~/assets/main.scss", "~/assets/main.css"];

export default defineNuxtConfig({
  compatibilityDate: "2025-01-29",
  devtools: { enabled: true },
  modules,
  css,
  primevue,
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  plugins: [
    "~/plugins/yandex-metrika.ts", // добавьте путь к вашему плагину
  ],
});
