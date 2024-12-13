<template>
  <div class="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
    <div class="text-center p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Увеличим продажи вина в ресторане или винном бутике минимум на 25%
      </h1>
      <p class="text-gray-600 mb-6">
        Узнайте, как наши решения помогут вам достичь новых высот в продажах!
      </p>
      <Button label="Узнать больше" class="p-button-lg p-button-success" @click="handleClick" />
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    handleClick() {
      // Логика обработки клика по кнопке
      alert('Кнопка нажата!');
    },
  },
};
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
