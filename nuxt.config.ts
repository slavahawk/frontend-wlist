import Aura from "@primevue/themes/aura";
import { definePreset } from "@primeuix/styled";
const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{surface.50}",
      100: "{surface.100}",
      200: "{surface.200}",
      300: "{surface.300}",
      400: "{surface.400}",
      500: "{surface.500}",
      600: "{surface.600}",
      700: "{surface.700}",
      800: "{surface.800}",
      900: "{surface.900}",
      950: "{surface.950}",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{primary.950}",
          contrastColor: "#ffffff",
          hoverColor: "{primary.900}",
          activeColor: "{primary.800}",
        },
        highlight: {
          background: "{primary.950}",
          focusBackground: "{primary.700}",
          color: "#ffffff",
          focusColor: "#ffffff",
        },
      },
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: "2025-01-29",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/main.scss"],
  primevue: {
    options: {
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: false,
        },
      },

      // ripple: true,
    },
    autoImport: true,
  },
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
