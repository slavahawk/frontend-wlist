<template>
  <div class="headerMain">
    <header class="header card mb-4">
      <router-link to="/" class="logo flex gap-4 items-center">
        <Logo class="w-6 ml-auto mr-auto" />
        <span class="text-xl">W-List</span>
      </router-link>
      <div class="flex gap-4">
        <!--        <AppTopbar />-->
        <Button label="Вход" @click="login" class="p-button-text" />
        <Button label="Регистрация" @click="register" class="p-button" />
      </div>
    </header>
    <nav class="card container mx-auto flex justify-center items-center p-4">
      <div class="flex space-x-4">
        <Button
          label="О Продукте"
          class="p-button-text"
          @click="$router.push('/#banner')"
        />
        <Button
          label="Партнеры"
          class="p-button-text"
          @click="$router.push('/#banner2')"
        />
        <Button label="Как это работает" class="p-button-text" />
        <Button label="Преимущества" class="p-button-text" />
        <Button label="Индустрии" class="p-button-text" />
        <Button label="Тарифы" class="p-button-text" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/svg/Logo.vue";

const login = () => {
  // Логика для входа
  window.open("https://admin.w-list.ru/auth/login");
  console.log("Вход");
};
const register = () => {
  window.open("https://admin.w-list.ru/auth/reg");
  // Логика для регистрации
  console.log("Регистрация");
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
</style>
