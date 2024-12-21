<template>
  <div class="layout-wrapper">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";

useSeoMeta({
  title: "W-List - Винная карта",
  ogTitle: "W-List - Винная карта",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});
</script>
