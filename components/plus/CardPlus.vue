<template>
  <div>
    <div class="text-2xl mb-2">{{ title }}</div>
    <div class="text-l">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>();
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
