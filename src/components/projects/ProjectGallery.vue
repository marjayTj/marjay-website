<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectScreenshot } from '../../types/portfolio'
import ImageViewer from './ImageViewer.vue'
import ProjectScreenshotFrame from './ProjectScreenshotFrame.vue'

const props = defineProps<{
  images: ProjectScreenshot[]
}>()

const activeIndex = ref<number | null>(null)

function openViewer(index: number): void {
  activeIndex.value = index
}

function closeViewer(): void {
  activeIndex.value = null
}

function showPrevious(): void {
  if (activeIndex.value === null) return

  activeIndex.value =
    (activeIndex.value - 1 + props.images.length) % props.images.length
}

function showNext(): void {
  if (activeIndex.value === null) return

  activeIndex.value = (activeIndex.value + 1) % props.images.length
}
</script>

<template>
  <section class="section-padding">
    <div class="portfolio-container">
      <div class="mb-10 max-w-3xl">
        <div class="section-label">Gallery /&gt;</div>
        <h2 class="section-title mb-6">Project Screenshots</h2>
        <p class="leading-8 text-portfolio-muted">
          Click any image to open the project image viewer.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <button v-for="(image, index) in images" :key="image.id" type="button"
          class="portfolio-card group overflow-hidden text-left transition hover:-translate-y-1 hover:border-portfolio-purple/70"
          :class="{ 'md:col-span-2': image.isFeatured }" :aria-label="`Open ${image.title} screenshot`"
          @click="openViewer(index)">
          <div
            class="overflow-hidden border-b border-portfolio-line bg-[radial-gradient(circle_at_75%_20%,rgba(124,58,237,0.14),transparent_40%),linear-gradient(145deg,#151522_0%,#0e0e18_70%)] p-4 sm:p-6">
            <ProjectScreenshotFrame :image="image.image" :alt="image.alt" />
          </div>
          <div class="flex items-center justify-between gap-4 p-5">
            <span class="font-black">{{ image.title }}</span>
            <span class="text-sm font-black text-portfolio-cyan">Open &nearr;</span>
          </div>
        </button>
      </div>
    </div>

    <ImageViewer v-if="activeIndex !== null" :images="images" :active-index="activeIndex" @close="closeViewer"
      @previous="showPrevious" @next="showNext" />
  </section>
</template>
