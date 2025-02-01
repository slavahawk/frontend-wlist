<template>
  <Banner />
  <Banner4 :id="MENU_HASH.ABOUT" />
  <Banner5 />
  <HowCan :id="MENU_HASH.HOW_CAN" />
  <Plus :id="MENU_HASH.PLUS" />
  <Interactive :id="MENU_HASH.INTERACTIVE" />
  <Banner9 />
  <PriceWidget :id="MENU_HASH.PRICES" />
  <Questions />
  <Save />
</template>

<script setup lang="ts">
import { MENU_HASH } from "~/db/menu.js";

// Используйте defineAsyncComponent для отложенной загрузки
import { defineAsyncComponent } from "vue";

const Banner = defineAsyncComponent(() => import("~/components/Banner.vue"));
const Banner4 = defineAsyncComponent(() => import("~/components/Banner4.vue"));
const Banner5 = defineAsyncComponent(() => import("~/components/Banner5.vue"));
const HowCan = defineAsyncComponent(() => import("~/components/HowCan.vue"));
const Plus = defineAsyncComponent(() => import("~/components/plus/Plus.vue"));
const Interactive = defineAsyncComponent(
  () => import("~/components/Interactive.vue"),
);
const Banner9 = defineAsyncComponent(() => import("~/components/Banner9.vue"));
const PriceWidget = defineAsyncComponent(
  () => import("~/components/PriceWidget/PriceWidget.vue"),
);
const Questions = defineAsyncComponent(
  () => import("~/components/Questions.vue"),
);
const Save = defineAsyncComponent(() => import("~/components/Save.vue"));
</script>
