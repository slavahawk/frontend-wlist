<template>
  <div class="layout-wrapper">
    <Header />
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
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import { MENU_HASH } from "~/db/menu";

useSeoMeta({
  title: "W-List - Винная карта",
  ogTitle: "W-List - Винная карта",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});
</script>
