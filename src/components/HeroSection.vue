<script setup>
import TerminalCard from './TerminalCard.vue'

const tags = ['Laravel', 'Vue 3', 'MySQL', 'Payroll Systems', 'Business Automation']
</script>

<template>
  <section id="start" class="section-padding">
    <div class="portfolio-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div class="section-label font-light   ">Start /&gt;</div>

        <p class="mb-5 text-xl font-light text-portfolio-cyan">
          # Hi, I'm Marjay C. Bumalod
        </p>

        <h3 class="hero-title mb-7">
          # I design and develop business systems
        </h3>

        <p class="mb-8 max-w-2xl text-lg leading-8 text-portfolio-muted">
          Full-stack software engineer focused on Mobile, Web Development and AI Integration.
          I build practical software solutions for businesses, including
          dashboards, reports, employee workflows, and practical business automation.
        </p>

        <div class="mb-7 flex flex-wrap gap-3 max-md:grid">
          <a href="#work" class="btn-primary">View selected work →</a>
          <a href="#contact" class="btn-secondary">Contact me →</a>
        </div>

        <div class="flex flex-wrap gap-2.5">
          <span v-for="tag in tags" :key="tag" class="portfolio-tag">
            {{ tag }}
          </span>
        </div>
      </div>

      <TerminalCard />
    </div>
  </section>
</template>
