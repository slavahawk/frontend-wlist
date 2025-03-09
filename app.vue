<template>
  <div class="layout-wrapper">
    <Header />
    <NuxtPage />
    <Footer />
    <Button
      class="support"
      as="a"
      target="_blank"
      :href="support"
      raised
      icon="pi pi-telegram"
      label="Служба поддержки"
    />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import { support } from "~/db/link";

useSeoMeta({
  title: "W-List - Интерактивная винная карта",
  ogTitle: "W-List - Винная карта, которая делает выбор легким и увлекательным",
  description:
    "Интерактивная винная карта W-List помогает вашим гостям находить идеальные варианты вина, увеличивая интерес и заказы. Упростите выбор вина с W-List.",
  ogDescription:
    "Откройте для себя идеальные сочетания вина с интерактивной винной картой W-List. Увлекательный выбор для ваших гостей.",
  ogImage: "@/assets/img/logo.svg",
  ogType: "website",
  ogUrl: "https://w-list.ru/",
  keywords:
    "вино, интерактивная винная карта, винная карта онлайн, онлайн карта вина, винная карта, выбор вина",
  twitterCard: "summary_large_image",
  twitterTitle: "W-List - Упростите выбор вина",
  twitterDescription:
    "С интерактивной винной картой W-List ваши гости найдут идеальное вино!",
  twitterImage: "@/assets/img/logo.svg",
});
</script>

<style>
.support {
  position: fixed !important;
  bottom: 24px;
  right: 24px;
}
</style>
