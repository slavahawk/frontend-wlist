<template>
  <div
    :style="{ backgroundImage: `url(${MainBanner})` }"
    class="flex items-center h-screen banner"
  >
    <div
      v-animateonscroll="{
        enterClass: 'animate-fadein',
        leaveClass: 'animate-fadeout',
      }"
      class="textBanner"
    >
      <div class="text-left">
        <h1 class="text-3xl font-bold text-white mb-4">
          Увеличим продажи вина в ресторане или винном бутике минимум на 25%
        </h1>
        <p class="text-white mb-6 text-l">
          c помощью интерактивной винной карты Winechef, которая сделает выбор
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
  margin: 100px 0 0 0;
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
