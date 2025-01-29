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
  ogTitle: "W-List - Интерактивная винная карта",
  description:
    "Интерактивная винная карта W-List упростит и сделает выбор вина увлекательным для ваших гостей, помогая им находить идеальные варианты и увеличивая интерес и заказы.",
  ogDescription:
    "Интерактивная винная карта W-List упростит и сделает выбор вина увлекательным для ваших гостей, помогая им находить идеальные варианты и увеличивая интерес и заказы.",
});
</script>

<style lang="scss">
.support {
  position: fixed !important;
  bottom: 24px;
  right: 24px;
}
</style>
