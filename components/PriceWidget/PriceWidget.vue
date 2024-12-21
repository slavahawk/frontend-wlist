<template>
  <div class="bg-white">
    <div class="pt-16 px-4 pb-16 max-w-7xl mx-auto">
      <div class="text-center mb-6">
        <h2>Цены</h2>
      </div>
      <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="index"
          class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0"
        >
          <CardPrice
            :title="plan.title"
            :price="plan.price"
            :period="plan.period"
            :features="plan.features"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardPrice from "./CardPrice.vue";

const pricingPlans = [
  {
    title: "Базовый",
    price: "Бесплатно",
    period: "",
    features: [
      "Идеально подходит для небольшого заведения с одной картой до 25 SKU",
    ],
  },
  {
    title: "Стандарт",
    price: "25 000 ₽",
    period: "в год",
    features: [
      "Сбалансированный пакет с расширенными возможностями. Для работы с винными картами до 100 SKU",
      "Поддержка",
    ],
  },
  {
    title: "Премиум",
    price: "50 000 ₽",
    period: "в год",
    features: [
      "Максимальная мощность и полный спектр услуг для бизнеса с возможностью без ограничений",
      "Поддержка",
    ],
  },
  {
    title: "Индивидуальный",
    price: "Свой прайс",
    period: "",
    features: ["Индивидуальный подход"],
  },
];
</script>
