<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TerminalCard from './TerminalCard.vue'

const tags: string[] = ['Laravel', 'Vue 3', 'MySQL', 'React', 'TypeScript', 'Tailwind CSS',]
const rotatingWords: string[] = [
  'payroll systems',
  'POS systems',
  'dashboards',
  'web apps',
  'automation tools',
  'business systems',
]

const currentIndex = ref(0)

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % rotatingWords.length
  }, 3000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
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
          # I build
          <Transition name="fade" mode="out-in">
            <span :key="rotatingWords[currentIndex]" class="inline-block text-portfolio-purple">
              {{ rotatingWords[currentIndex] }}
            </span>
          </Transition>
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