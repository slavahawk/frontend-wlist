<template>
  <div>
    <div class="pt-16 pl-4 pr-4 pb-16 max-w-7xl ml-auto mr-auto">
      <div class="text-center mb-6">
        <h2>Часто задаваемые вопросы</h2>
      </div>
      <div class="flex flex-col gap-2">
        <Panel
          v-for="q in questions"
          :key="q.header"
          :header="q.header"
          toggleable
          collapsed
        >
          {{ q.text }}
        </Panel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { questions } from "~/db/questions.js";
</script>
