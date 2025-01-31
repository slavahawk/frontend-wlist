<template>
  <div class="bg-white">
    <div class="pt-16 pb-16 max-w-7xl ml-auto mr-auto">
      <h2 class="text-center">Наши преимущества</h2>
      <div class="flex gap-4 flex-wrap justify-center">
        <div class="flex flex-col justify-center gap-4 card-713 card-610">
          <CardPlus
            class="card text-right text-713"
            title="Надежный партнер с экспертным мнением"
            text="В нашей команде, помимо IT-специалистов, есть практикующий сомелье с опытом в гостеприимстве и винном образовании, готовый делиться своими знаниями."
          />
          <CardPlus
            class="card text-right text-713"
            title="Интерактивный выбор вина"
            text="Повысьте качество обслуживания с помощью увлекательной цифровой винной карты, которая содержит подробные описания вин."
          />
        </div>
        <div>
          <img src="@/assets/img/ipad.webp" class="max-w-[400px]" alt="" />
        </div>
        <div class="flex flex-col justify-center gap-4 card-1027 card-610">
          <CardPlus
            class="card text-left"
            title="Интерактивные списки вин"
            text="Погрузите своих гостей с помощью динамичных, простых в навигации цифровых винных меню."
          />
          <CardPlus
            class="card text-left"
            title="Синхронизация винной карты в режиме реального времени"
            text="Обеспечьте точность ассортимента с помощью мгновенных обновлений."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardPlus from "~/components/plus/CardPlus.vue";
</script>

<style scoped>
.card {
  max-width: 300px;
}

@media (max-width: 1027px) {
  .card-1027 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 713px) {
  .card-713 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .text-713 {
    text-align: left;
  }
}

@media (max-width: 610px) {
  .card-610 {
    display: flex;
  }
}
</style>
