<template>
  <div
    :style="{
      backgroundImage: `url(${MainBanner})`,
      padding: 'var(--p-menubar-padding)',
    }"
    class="flex items-center banner"
  >
    <div class="textBanner max-w-7xl ml-auto mr-auto w-full">
      <div class="text-left">
        <h1 class="mb-4 text-white drop-shadow-xl">
          Увеличим продажи вина в ресторане или винном бутике минимум на 25%
        </h1>
        <p class="mb-6 text-white drop-shadow-xl">
          c помощью интерактивной винной карты W-List, которая сделает выбор
          вина для гостя понятным и удобным
        </p>
        <Button size="large" label="Заказать онлайн консультацию" />
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
  min-height: calc(100vh - 62px);
}

.banner:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}

.textBanner div {
  padding-top: 42px;
  padding-bottom: 42px;
  max-width: 540px;
}
</style>
