<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../../types/portfolio'
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
  <section class="section-padding pb-10">
    <div class="portfolio-container">
      <RouterLink to="/#work"
        class="mb-10 inline-flex text-sm font-black text-portfolio-cyan transition hover:text-white">
        &larr; Back to Work
      </RouterLink>

      <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div class="section-label">Case Study {{ project.number }} /&gt;</div>
          <h1 class="hero-title mb-7">{{ project.title }}</h1>
          <p class="mb-7 max-w-2xl text-lg leading-8 text-portfolio-muted">
            {{ project.description }}
          </p>
          <ProjectTechBadges :items="project.techStack" />
        </div>

        <div
          class="flex min-h-[280px] items-center justify-center overflow-hidden rounded-panel border border-portfolio-borderStrong bg-[radial-gradient(circle_at_75%_20%,rgba(124,58,237,0.18),transparent_40%),linear-gradient(145deg,#151522_0%,#0e0e18_70%)] p-5 shadow-portfolio sm:p-7"
        >
          <ProjectScreenshotFrame
            v-if="preview"
            :image="preview.image"
            :alt="preview.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
