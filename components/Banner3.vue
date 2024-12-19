<template>
  <div class="bg-white">
    <div class="text-center pt-16 pb-16 max-w-7xl ml-auto mr-auto">
      <h2>
        Уже более 30 ресторанов и винных бутиков по всей России увеличили
        продажи вина, благодаря W-List
      </h2>
      <Carousel
        :value="rests"
        :numVisible="5"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <img
            class="border-1 surface-border border-round m-2 p-3 block"
            src="~/assets/img/01.jpg"
            alt="img"
          />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rests = ref([
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]);

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
