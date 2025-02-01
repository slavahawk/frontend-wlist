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
        <h1 class="mb-4 !text-white drop-shadow-xl">
          Увеличим продажи вина в вашем бизнесе
        </h1>
        <p class="mb-6 text-white drop-shadow-xl">
          Интерактивная винная карта <span class="nowrap">W-List</span> упростит
          и сделает выбор вина простым и увлекательным для ваших гостей, помогая
          им находить для себя идеальные варианты
        </p>
        <Button
          as="a"
          :href="support"
          target="_blank"
          size="large"
          label="Получить консультацию"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainBanner from "~/assets/img/main.banner.jpg";
import { support } from "~/db/link";
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
  z-index: -1;
}

.textBanner div {
  padding-top: 42px;
  padding-bottom: 42px;
  max-width: 540px;
  z-index: 2;
}
</style>
