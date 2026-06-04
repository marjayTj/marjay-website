<script setup>
import { labs } from '../data/projects'
import LabCard from './LabCard.vue'
</script>

<template>
  <section id="lab" class="section-padding">
    <div class="portfolio-container">
      <div class="mb-12 grid items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div class="section-label">Lab /&gt;</div>
          <h2 class="section-title">
            Reusable modules and system ideas.
          </h2>
        </div>

        <p class="text-lg leading-8 text-portfolio-muted">
          This section shows clients that you can create practical modules,
          not only static websites.
        </p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <LabCard
          v-for="lab in labs"
          :key="lab.number"
          :lab="lab"
        />
      </div>
    </div>
  </section>
</template>
