<script setup lang="ts">
defineProps<{
  label: string
  title: string
  items: string[]
}>()
</script>

<template>
  <article class="portfolio-card p-7 md:p-9">
    <div class="mb-4 text-sm font-black text-portfolio-purple">{{ label }} /&gt;</div>
    <h2 class="mb-6 text-3xl font-black tracking-[-0.05em]">{{ title }}</h2>
    <ul class="grid gap-4 text-portfolio-muted">
      <li v-for="item in items" :key="item" class="flex gap-3 leading-7">
        <span class="text-portfolio-cyan" aria-hidden="true">+</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>
