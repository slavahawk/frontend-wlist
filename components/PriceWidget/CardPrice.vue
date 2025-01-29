<template>
  <div
    class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all h-full"
    style="border-radius: 10px"
  >
    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">
      Основной
    </div>
    <div class="my-8 flex flex-col items-center gap-4">
      <div class="flex items-center">
        <span
          class="text-4xl font-bold mr-2 text-surface-900 dark:text-surface-0"
        >
          Бесплатно
        </span>
        <!--        <span class="text-surface-600 dark:text-surface-200">{{ period }}</span>-->
      </div>
      <Button
        as="a"
        :href="support"
        target="_blank"
        label="Получить доступ"
      ></Button>
    </div>
    <Divider class="w-full bg-surface-200"></Divider>
    <ul
      class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8"
    >
      <li class="py-2">
        <i class="pi pi-fw pi-check text-xl mr-2"></i>
        <span class="text-xl leading-normal">
          Бесплатная поддержка для всех зарегистрированных пользователей
          <em>(Мы всегда готовы помочь!)</em>
        </span>
      </li>

      <li class="py-2">
        <i class="pi pi-fw pi-check text-xl mr-2"></i>
        <span class="text-xl leading-normal">
          Добавление вина по вашему запросу
          <em>(Мы учитываем ваши предпочтения и расширяем ассортимент)</em>
        </span>
      </li>

      <li class="py-2">
        <i class="pi pi-fw pi-check text-xl mr-2"></i>
        <span class="text-xl leading-normal">
          Индивидуальные правки для вашего удобства
          <em>(Настраиваем систему под ваши нужды)</em>
        </span>
      </li>

      <li class="py-2">
        <i class="pi pi-fw pi-check text-xl mr-2"></i>
        <span class="text-xl leading-normal">
          Работаем круглосуточно <em>(Если не отвечаем, просто отдохнули!)</em>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { support } from "~/db/link.js";
</script>
