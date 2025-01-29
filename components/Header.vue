<template>
  <Menubar :model="menu">
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
        :href="`#${item.hash}`"
      >
        <span>{{ item.label }}</span>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
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
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Logo from "~/components/svg/Logo.vue";
import { menu } from "~/db/menu";
import { login, reg } from "~/db/link.js";
</script>

<style scoped></style>
