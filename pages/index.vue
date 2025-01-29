<template>
  <Banner />
  <!--  <Banner2 :id="MENU_HASH.ABOUT" />-->
  <DeferredContent>
    <!--    <Partners :id="MENU_HASH.PARTNER" />-->
    <Banner4 />
    <Banner5 />
  </DeferredContent>
  <DeferredContent>
    <HowCan :id="MENU_HASH.HOW_CAN" />
    <Plus :id="MENU_HASH.PLUS" />
  </DeferredContent>
  <DeferredContent>
    <Interactive :id="MENU_HASH.INTERACTIVE" />
    <Banner9 />
  </DeferredContent>
  <DeferredContent>
    <PriceWidget :id="MENU_HASH.PRICES" />
    <Questions />
    <Save />
  </DeferredContent>
</template>

<script setup lang="ts">
import { MENU_HASH } from "~/db/menu.js";
</script>

<style scoped></style>
