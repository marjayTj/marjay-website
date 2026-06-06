<script setup lang="ts">
defineProps<{
  label: string
  title: string
  content: string
}>()
</script>

<template>
  <article class="portfolio-card p-7 md:p-9">
    <div class="mb-4 text-sm font-black text-portfolio-purple">{{ label }} /&gt;</div>
    <h2 class="mb-5 text-3xl font-black tracking-[-0.05em]">{{ title }}</h2>
    <p class="leading-8 text-portfolio-muted">{{ content }}</p>
  </article>
</template>
