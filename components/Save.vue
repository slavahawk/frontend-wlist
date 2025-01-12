<template>
  <div class="bg-white">
    <div
      class="pt-16 pl-4 pr-4 pb-16 max-w-7xl ml-auto mr-auto flex justify-center items-center gap-4 flex-col"
    >
      <h4>Посмотреть и сказать бесплатную демоверсию нашего приложения</h4>
      <Button label="Скачать" @click="open" icon="pi pi-download" />
    </div>
  </div>
</template>
<script setup lang="ts">
const open = () => {
  const newWindow = window.open("https://demo.w-list.ru", "_blank");
  if (newWindow) newWindow.opener = null; // Это улучшение безопасности помогает предотвратить доступ к оригинальному окну
};
</script>
