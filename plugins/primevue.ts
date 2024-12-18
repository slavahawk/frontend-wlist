import AnimateOnScroll from "primevue/animateonscroll";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animateonscroll", AnimateOnScroll);
});
