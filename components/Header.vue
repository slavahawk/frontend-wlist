<template>
  <header class="header">
    <div class="logo flex gap-4 items-center">
      <Logo class="w-8 ml-auto mr-auto"/>
      <span class="text-2xl">W-List</span>
    </div>
    <div class="flex gap-4">
      <Button label="Вход" @click="login" class="p-button-text" />
      <Button label="Регистрация" @click="register" class="p-button" />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "~/components/svg/Logo.vue";

const login = () =>  {
  // Логика для входа
  window.open('https://admin.w-list.ru/auth/login');
  console.log('Вход');
}
const register = () =>  {
  window.open('https://admin.w-list.ru/auth/reg');
  // Логика для регистрации
  console.log('Регистрация');
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

</style>
