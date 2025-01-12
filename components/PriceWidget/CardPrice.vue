<template>
  <div
    class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all h-full"
    style="border-radius: 10px"
  >
    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">
      {{ title }}
    </div>
    <div class="my-8 flex flex-col items-center gap-4">
      <div class="flex items-center">
        <span
          class="text-4xl font-bold mr-2 text-surface-900 dark:text-surface-0"
        >
          {{ price }}
        </span>
        <span class="text-surface-600 dark:text-surface-200">{{ period }}</span>
      </div>
      <Button @click="$emit('clickPay')" label="Получить доступ"></Button>
    </div>
    <Divider class="w-full bg-surface-200"></Divider>
    <ul
      class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8"
    >
      <li v-for="(item, index) in features" :key="index" class="py-2">
        <i class="pi pi-fw pi-check text-xl mr-2"></i>
        <span class="text-xl leading-normal">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  price: string;
  period: string;
  features: string[];
}>();
</script>
