<template>
  <div class="landing-page">
    <Dialog v-model:visible="showDialog" modal header="Подтверждение">
      <template #footer>
        <Button label="Закрыть" @click="showDialog = false" />
      </template>
      <p>Добро пожаловать на наш сайт! Подтвердите, пожалуйста, ваше посещение.</p>
    </Dialog>

    <div class="content">
      <h1>Революция винных карт: Управляйте своей картой легко и эффективно!</h1>
      <p>
        С помощью интуитивной понятной электронной винной карты экономьте время на рекомендации вина официантами и сосредоточитесь на обслуживании гостей.
      </p>
      <p>
        Каждый гость превратится в винного эксперта и сможет самостоятельно подобрать идеальное вино к своим блюдам, создавая незабываемые впечатления.
      </p>
      <Logo class="w-72 ml-auto mr-auto"/>
      <Button label="Запросить демо-версию" @click="requestDemo" class="cta-button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import Logo from "~/components/svg/Logo.vue";

const showDialog = ref(true);

const requestDemo = () => {
  // Логика для запроса демо-версии
  alert("Запрос демо-версии отправлен!");
  window.open('https://admin.w-list.ru');
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.content {
  text-align: center;
}


.cta-button {
  margin-top: 20px;
}
</style>
