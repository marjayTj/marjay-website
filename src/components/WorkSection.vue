<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  getFeaturedProjects,
  projectCategories,
} from '../data/projects'
import type { ProjectCategory } from '../types/portfolio'
import ProjectCard from '@/components/projects/ProjectCard.vue'

type ProjectFilter = 'All Projects' | ProjectCategory

const selectedCategory = ref<ProjectFilter>('All Projects')
const featuredProjects = getFeaturedProjects()

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All Projects') {
    return featuredProjects
  }

  return featuredProjects.filter(
    (project) => project.category === selectedCategory.value,
  )
})

function getFilterClass(category: ProjectFilter): string {
  return selectedCategory.value === category
    ? 'border-portfolio-purple bg-portfolio-purpleStrong text-white shadow-purple'
    : 'border-portfolio-line bg-portfolio-panel text-portfolio-muted hover:border-portfolio-purple/60 hover:text-white'
}
</script>

<template>
  <section id="work" class="section-padding">
    <div class="portfolio-container">
      <div class="mb-12 grid items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div class="section-label">* Work /&gt;</div>
          <h2 class="section-title">
            Selected systems built for business workflows.
          </h2>
        </div>

        <p class="text-lg leading-8 text-portfolio-muted">
          Selected previews of systems, applications, and analytics work.
          Open a case study to see the problem, solution, modules, and value.
        </p>
      </div>

      <div class="mb-8 flex flex-wrap gap-3" aria-label="Filter projects by category">
        <button v-for="category in projectCategories" :key="category" type="button"
          class="rounded-full border px-4 py-2 text-sm font-black transition" :class="getFilterClass(category)"
          :aria-pressed="selectedCategory === category" @click="selectedCategory = category">
          {{ category }}
        </button>
      </div>

      <div class="grid gap-7">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />

        <div v-if="filteredProjects.length === 0" class="portfolio-card p-8 text-center md:p-12">
          <p class="mb-2 text-xl font-black">No featured projects in this category yet.</p>
          <p class="text-portfolio-muted">
            Select another category to continue browsing the current case studies.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
