<template>
  <footer class="footer bg-black">
    <div
      class="pt-16 px-4 pb-16 max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 footer__document"
    >
      <div class="text-white flex flex-col gap-2">
        <span class="text-xl"> W-list</span>
        <span
          >© 2025 W-List <br />
          ИП Крылов В.Ю. 246315122011</span
        >
        <a href="tel:+79082090500">8 (908) 209 05 00</a>
      </div>
      <div class="flex flex-col gap-2 text-white">
        <a href="https://files.w-list.ru/free_contract.pdf" target="_blank"
          >Лицензионный договор</a
        >
        <a href="https://files.w-list.ru/cookies.pdf" target="_blank"
          >Политика cookies</a
        >
        <a
          href="https://files.w-list.ru/soglasie_na_obrabotku_personalnyh_dannyh.pdf"
          target="_blank"
          >Политика обработки персональных данных</a
        >
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

a:hover {
  text-decoration: underline;
}

.footer__document {
  @media (max-width: 560px) {
    column-gap: 20px;
  }
}
</style>
