<template>
  <Banner />
  <Banner2 :id="MENU_HASH.ABOUT" />
  <DeferredContent>
    <Partners :id="MENU_HASH.PARTNER" />
    <Banner4 />
  </DeferredContent>
  <DeferredContent>
    <Banner5 />
    <HowCan :id="MENU_HASH.HOW_CAN" />
  </DeferredContent>
  <DeferredContent>
    <Plus :id="MENU_HASH.PLUS" />
    <Interactive :id="MENU_HASH.INTERACTIVE" />
  </DeferredContent>
  <DeferredContent>
    <Banner9 />
    <PriceWidget :id="MENU_HASH.PRICES" />
  </DeferredContent>
  <DeferredContent>
    <Questions />
    <Save />
  </DeferredContent>
</template>

<script setup lang="ts">
import { MENU_HASH } from "~/db/menu.js";
</script>

<style scoped></style>
