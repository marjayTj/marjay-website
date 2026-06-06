<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../../types/portfolio'

const props = defineProps<{
  project: Project
}>()

const metaItems = computed(() => [
  { label: 'Project Type', value: props.project.projectType },
  { label: 'Role', value: props.project.role },
  { label: 'Output', value: props.project.output },
])
</script>

<template>
  <section class="pb-12">
    <div class="portfolio-container grid gap-5 md:grid-cols-3">
      <article v-for="item in metaItems" :key="item.label" class="portfolio-card p-6">
        <div class="mb-3 text-xs font-black uppercase tracking-[0.16em] text-portfolio-purple">
          {{ item.label }}
        </div>
        <p class="text-lg font-black text-portfolio-soft">{{ item.value }}</p>
      </article>
    </div>
  </section>
</template>
