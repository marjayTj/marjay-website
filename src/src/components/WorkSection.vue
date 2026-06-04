<script setup lang="ts">
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="work" class="section-padding">
    <div class="portfolio-container">
      <div class="mb-12 grid items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div class="section-label">Work /&gt;</div>
          <h2 class="section-title">
            Selected projects with product previews.
          </h2>
        </div>

        <p class="text-lg leading-8 text-portfolio-muted">
          This section includes image/mockup areas for the developed products.
          Replace each mockup later with actual screenshots from your systems.
        </p>
      </div>

      <div class="grid gap-7">
        <ProjectCard
          v-for="project in projects"
          :key="project.number"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
