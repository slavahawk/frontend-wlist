<template>
  <div class="bg" :style="{ backgroundImage: `url(${Bg})` }">
    <div class="bg-text">
      <h2 class="!text-white">Не нашли свой бизнес?</h2>
      <p class="text-white">
        команда <span class="nowrap">W-List</span> создает решения в области
        автоматизации торговли напитками для бизнеса любого типа и размера. Если
        вы не нашли свой тип бизнеса
      </p>
      <Button as="a" :href="support" target="_blank" label="Свяжитесь с нами" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Bg from "assets/img/bg-call1.png";
import { support } from "~/db/link";
</script>

<style scoped>
/* Дополнительные стили, если нужно */
.bg {
  width: 100%;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  vertical-align: middle;
  position: relative;
  height: 568px;
  background-attachment: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.bg:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.bg-text {
  max-width: 600px;
  position: absolute;
  content: "";
  color: white;
  z-index: 10;
}
</style>
