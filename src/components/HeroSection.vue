<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TerminalCard from './TerminalCard.vue'
import Typed from 'typed.js'

const tags: string[] = ['Laravel', 'Vue 3', 'MySQL', 'React', 'TypeScript', 'Tailwind CSS',]

const typedElement = ref<HTMLElement | null>(null)
let typed: Typed | null = null

const animatedText = () => {
  if (!typedElement.value) return

  typed = new Typed(typedElement.value, {
    strings: [
      'web apps',
      'business systems',
      'payroll systems',
      'dashboards',
      'automation tools',
      'mobile apps',
    ],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 900,
    startDelay: 200,
    loop: true,
    showCursor: true,
    cursorChar: '|',
  })
}


onMounted(() => {
  animatedText()
})

onUnmounted(() => {
  typed?.destroy()
})
</script>

<template>
  <section id="start" class="section-padding">
    <div class="portfolio-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div class="section-label text-sm">Start /&gt;</div>

        <p class="mb-5 text-xl font-light text-portfolio-cyan">
          # Hi, I'm Marjay C. Bumalod
        </p>

        <h1 class="hero-title mb-7">
          $ I build
          <span ref=typedElement class="inline-block text-portfolio-purple">

          </span>
          </br />
          that simplify workflows
        </h1>

        <p class="mb-8 max-w-2xl text-lg leading-8 text-portfolio-muted">
          I create software systems that organize data, automate tasks, and improve daily operations.
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>