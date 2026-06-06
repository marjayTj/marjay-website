<script setup lang="ts">
import type { Project } from '../../types/portfolio'
import ProductMockup from '@/components/ProductMockup.vue'
import ProjectTechBadges from './ProjectTechBadges.vue'

defineProps<{
  project: Project
}>()
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

        <div class="rounded-panel border border-portfolio-borderStrong bg-portfolio-codePanel p-4 shadow-portfolio">
          <ProductMockup :type="project.mockup" :title="project.mockupTitle" />
        </div>
      </div>
    </div>
  </section>
</template>
