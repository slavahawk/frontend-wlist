<template>
  <div class="bg-white">
    <div
      class="text-center pt-16 pb-16 animate-duration-1000 text-black"
      v-animateonscroll="{
        enterClass: 'animate-fadein',
        leaveClass: 'animate-fadeout',
      }"
    >
      <h1 class="text-2xl font-bold mb-4">
        Как W-List может помочь вашему бизнесу?
      </h1>
      <p class="text-l mb-6">
        Узнай о возможностях интерактивных винных карт W-List
      </p>
      <iframe
        src="https://www.youtube.com/embed/uVoX_jVnDS4"
        title="ДЕБАТЫ. СОБОЛЕВ vs. МАРКАРЯН: женщины, свобода воли, смысл жизни, секта в XXI веке"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script></script>

<style scoped>
iframe {
  width: 100%;
  max-width: 768px;
  min-height: 500px;
  margin: 0 auto;
}
/* Дополнительные стили, если нужно */
</style>
