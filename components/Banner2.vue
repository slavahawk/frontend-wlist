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
      <video controls>
        <source
          src="https://www.youtube.com/watch?v=uVoX_jVnDS4&t=1s&ab_channel=SOBOLEV"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script></script>

<style scoped>
video {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}
/* Дополнительные стили, если нужно */
</style>
