<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug } from '@/data/projects'
import ProjectCTA from '@/components/projects/ProjectCTA.vue'
import ProjectGallery from '@/components/projects/ProjectGallery.vue'
import ProjectHero from '@/components/projects/ProjectHero.vue'
import ProjectInfoSection from '@/components/projects/ProjectInfoSection.vue'
import ProjectListSection from '@/components/projects/ProjectListSection.vue'
import ProjectMetaCards from '@/components/projects/ProjectMetaCards.vue'

const route = useRoute()
const project = computed(() => getProjectBySlug(String(route.params.slug)))
</script>

<template>
  <main v-if="project">
    <ProjectHero :project="project" />
    <ProjectMetaCards :project="project" />
    <ProjectGallery :images="project.screenshots" />

    <section class="pb-12">
      <div class="portfolio-container grid gap-6 lg:grid-cols-2">
        <ProjectInfoSection label="01" title="Problem" :content="project.problem" />
        <ProjectInfoSection label="02" title="Solution" :content="project.solution" />
        <ProjectListSection label="03" title="Core Modules" :items="project.coreModules" />
        <ProjectListSection label="04" title="Business Value" :items="project.businessValue" />
      </div>
    </section>

    <ProjectCTA />
  </main>

  <main v-else class="section-padding">
    <div class="portfolio-container">
      <div class="portfolio-card mx-auto max-w-3xl p-8 text-center md:p-12">
        <div class="section-label">Project 404 /&gt;</div>
        <h1 class="section-title mb-6">Case study not found.</h1>
        <p class="mb-8 text-portfolio-muted">
          The requested project slug does not match an available case study.
        </p>
        <RouterLink to="/#work" class="btn-primary">Back to Work &rarr;</RouterLink>
      </div>
    </div>
  </main>
</template>
