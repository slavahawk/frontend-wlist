<template>
  <Header/>
  <Nav/>
  <NuxtPage />
</template>
<script setup lang="ts">

import Header from "~/components/Header.vue";
import Nav from "~/components/Nav.vue"

useSeoMeta({
  title: 'W-List - Винная карта',
  ogTitle: 'W-List - Винная карта',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
})
</script>
