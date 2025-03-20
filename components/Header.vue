<template>
  <header class="header">
    <div class="header__body">
      <div class="header__overlay">
        <a href="" class="header__logo" aria-label="Home" title="Home">
          <Logo class="w-6" />
          <span class="text-xl">W-List</span>
        </a>
        <Button
          class="burger-button ml-4"
          :icon="`pi ${!isActive ? 'pi-bars' : 'pi-times'}`"
          variant="text"
          @click="isActive = !isActive"
        />
        <nav class="header__menu" :class="{ active: isActive }">
          <ul class="header__menu-list">
            <li v-for="item in menu" :key="item.hash">
              <Button
                as="a"
                size="small"
                variant="text"
                @click="isActive = false"
                :href="`#${item.hash}`"
                class="header__menu-link"
              >
                {{ item.label }}</Button
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__contact">
        <div class="btn">
          <Button
            label="Вход"
            as="a"
            target="_blank"
            :href="login"
            class="p-button-text"
          />
          <Button
            label="Регистрация"
            as="a"
            target="_blank"
            :href="reg"
            class="p-button"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "~/components/svg/Logo.vue";
import { menu } from "~/db/menu";
import { login, reg } from "~/db/link.js";

const isActive = ref(false);
</script>