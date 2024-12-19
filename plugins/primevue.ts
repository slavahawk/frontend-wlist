import AnimateOnScroll from "primevue/animateonscroll";
import ConfirmationService from "primevue/confirmationservice";
// import DialogService from "primevue/dialogservice";
// import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animateonscroll", AnimateOnScroll);
  nuxtApp.vueApp.use(ConfirmationService);
  // nuxtApp.vueApp.use(ToastService);
  // nuxtApp.vueApp.use(DialogService);
});
