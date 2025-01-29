<template>
  <footer class="footer bg-black">
    <div
      class="pt-16 px-4 pb-16 max-w-7xl mx-auto flex justify-between items-center gap-2"
    >
      <div class="text-white flex flex-col gap-2">
        <span class="text-xl"> W-list</span>
        <span
          >© 2025 W-List <br />
          ИП Крылов В.Ю. 246315122011</span
        >
        <a href="tel:+79082090500">8 (908) 209 05 00</a>
      </div>
      <!--      <div class="flex flex-col gap-2 text-white">-->
      <!--        <a href="">О нас</a>-->
      <!--        <a href="">Наш блог</a>-->
      <!--      </div>-->
      <div class="flex flex-col gap-2 text-white">
        <a href="">Лицензионный договор</a>
        <a href="">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
div a,
span {
  @media (max-width: 350px) {
    font-size: 0.875rem;
  }
}
</style>
