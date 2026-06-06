<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <span v-for="item in items" :key="item" class="portfolio-tag">
      {{ item }}
    </span>
  </div>
</template>
