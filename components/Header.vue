<template>
  <div class="headerMain bg-black">
    <header class="header">
      <div class="logo flex gap-4 items-center">
        <Logo class="w-6 ml-auto mr-auto" />
        <span class="text-xl">W-List</span>
      </div>
      <div class="flex gap-4">
        <Button label="Вход" @click="login" class="p-button-text" />
        <Button label="Регистрация" @click="register" class="p-button" />
      </div>
    </header>
    <div class="shadow-md">
      <nav class="container mx-auto flex justify-center items-center p-4">
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
  box-shadow: 0 2px 4px white;
}

.headerMain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>
