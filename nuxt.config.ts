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
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon", // Или "image/ico"
          href: "/favicon.ico", // Укажите путь к вашему favicon
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        // 16x16 иконка для браузеров
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        // 32x32 иконка для браузеров
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        // Иконка для Apple устройства
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-icon.png",
        },
        // Иконка для Android
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        // Иконка для старых устройств и браузеров
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
        // Поместите другие размеры иконок, если необходимо
      ],
    },
  },
});
