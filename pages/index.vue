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
import PriceWidget from "~/components/PriceWidget/PriceWidget.vue";
</script>
