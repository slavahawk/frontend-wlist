<template>
  <div
    :style="{ backgroundImage: `url(${MainBanner})` }"
    class="flex items-center h-screen banner mt-4"
  >
    <div class="textBanner">
      <div class="text-left">
        <h1 class="font-bold mb-4 text-white">
          Увеличим продажи вина в ресторане или винном бутике минимум на 25%
        </h1>
        <p class="mb-6 text-white">
          c помощью интерактивной винной карты W-List, которая сделает выбор
          вина для гостя понятным и удобным
        </p>
        <Button label="Заказать онлайн консультацию" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainBanner from "../assets/img/main.banner.jpg";
</script>

<style scoped>
.banner {
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
}

.textBanner {
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
}

.textBanner div {
  padding-top: 42px;
  padding-bottom: 42px;
  max-width: 540px;
}
</style>
