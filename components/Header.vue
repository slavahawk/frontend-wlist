<template>
  <Menubar :model="items">
    <template #start>
      <router-link to="/" class="logo flex gap-4 items-center">
        <Logo class="w-6 ml-auto mr-auto" />
        <span class="text-xl">W-List</span>
      </router-link>
    </template>
    <template #item="{ item, props }">
      <a
        v-ripple
        class="flex items-center"
        v-bind="props.action"
        :href="item.href"
      >
        <span>{{ item.label }}</span>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <Button label="Вход" @click="login" class="p-button-text" />
        <Button label="Регистрация" @click="register" class="p-button" />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Logo from "~/components/svg/Logo.vue";

const login = () => {
  window.open("https://admin.w-list.ru/auth/login");
};
const register = () => {
  window.open("https://admin.w-list.ru/auth/reg");
};

const items = ref([
  {
    label: "О Продукте",
    href: "/#banner",
  },
  {
    label: "Партнеры",
    href: "/#banner",
  },
  {
    label: "Как это работает",
    href: "/#banner",
  },
  {
    label: "Преимущества",
    href: "/#banner",
  },
  {
    label: "Индустрии",
    href: "/#banner",
  },
  {
    label: "Тарифы",
    href: "/#banner",
  },
]);
</script>

<style scoped></style>
