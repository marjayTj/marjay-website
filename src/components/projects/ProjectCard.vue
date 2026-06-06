<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types/portfolio'
import ProjectScreenshotFrame from './ProjectScreenshotFrame.vue'
import ProjectTechBadges from './ProjectTechBadges.vue'

const props = defineProps<{
  project: Project
}>()

const preview = computed(
  () =>
    props.project.screenshots.find((screenshot) => screenshot.isFeatured) ??
    props.project.screenshots[0],
)
</script>

<template>
  <article
    class="portfolio-card grid gap-7 p-5 transition hover:-translate-y-1 hover:border-portfolio-purple/80 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="grid content-center p-5 max-md:p-2">
      <div class="mb-4 flex items-center gap-3 text-sm font-black">
        <span class="text-portfolio-purple">{{ project.number }}</span>
        <span class="text-portfolio-muted">{{ project.category }}</span>
      </div>

      <h3 class="mb-5 text-[clamp(2rem,4vw,3.25rem)] font-black leading-none tracking-[-0.06em]">
        {{ project.title }}
      </h3>

      <p class="mb-5 max-w-xl leading-7 text-portfolio-muted">
        {{ project.description }}
      </p>

      <ul class="mb-6 grid gap-2 text-sm leading-6 text-portfolio-soft">
        <li v-for="feature in project.features" :key="feature" class="flex gap-3">
          <span class="text-portfolio-cyan" aria-hidden="true">+</span>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <ProjectTechBadges :items="project.techStack" class="mb-6" />

      <RouterLink :to="`/work/${project.slug}`"
        class="w-fit text-sm font-black text-portfolio-cyan transition hover:text-white">
        View case study &rarr;
      </RouterLink>
    </div>

    <div
      class="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-card border border-portfolio-borderStrong bg-[radial-gradient(circle_at_75%_20%,rgba(124,58,237,0.18),transparent_40%),linear-gradient(145deg,#151522_0%,#0e0e18_70%)] p-5 sm:p-7 lg:min-h-[420px]"
    >
      <ProjectScreenshotFrame
        v-if="preview"
        :image="preview.image"
        :alt="preview.alt"
      />
    </div>
  </article>
</template>
