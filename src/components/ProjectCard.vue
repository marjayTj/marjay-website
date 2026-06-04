<script setup>
import ProductMockup from './ProductMockup.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="portfolio-card grid gap-7 p-5 transition hover:-translate-y-1 hover:border-portfolio-purple/80 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="grid content-center p-5 max-md:p-2">
      <div class="mb-4 font-black text-portfolio-purple">{{ project.number }}</div>

      <h3 class="mb-5 text-[clamp(2rem,4vw,3.25rem)] font-black leading-none tracking-[-0.06em]">
        {{ project.title }}
      </h3>

      <p class="mb-5 max-w-xl text-sm leading-6 text-portfolio-muted">
        {{ project.description }}
      </p>

      <div class="mb-5 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="portfolio-tag"
        >
          {{ tag }}
        </span>
      </div>

      <a href="#contact" class="w-fit text-sm font-black text-portfolio-cyan">
        View case study →
      </a>
    </div>

    <div class="rounded-card border border-portfolio-borderStrong bg-portfolio-codePanel p-4">
      <ProductMockup
        :type="project.mockup"
        :title="project.mockupTitle"
      />
    </div>
  </article>
</template>
