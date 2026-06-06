<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import type { ProjectScreenshot } from '../types/portfolio'

const props = defineProps<{
  images: ProjectScreenshot[]
  activeIndex: number
}>()

const emit = defineEmits<{
  close: []
  previous: []
  next: []
}>()

const closeButton = ref<HTMLButtonElement | null>(null)
let previousOverflow = ''

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    emit('close')
  }

  if (event.key === 'ArrowLeft') {
    emit('previous')
  }

  if (event.key === 'ArrowRight') {
    emit('next')
  }
}

function handleBackdropClick(event: MouseEvent): void {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

watch(
  () => props.activeIndex,
  async () => {
    await nextTick()
    closeButton.value?.focus()
  },
)

onMounted(async () => {
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
  await nextTick()
  closeButton.value?.focus()
})

onUnmounted(() => {
  document.body.style.overflow = previousOverflow
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    class="fixed inset-0 z-[200] grid place-items-center bg-black/90 p-4 backdrop-blur-md md:p-8"
    role="dialog"
    aria-modal="true"
    :aria-label="`Image viewer: ${images[activeIndex].title}`"
    @click="handleBackdropClick"
  >
    <div class="grid max-h-full w-full max-w-6xl gap-4">
      <div class="flex items-center justify-between gap-4 text-sm font-black text-white">
        <div>
          <span class="text-portfolio-cyan">{{ activeIndex + 1 }} / {{ images.length }}</span>
          <span class="ml-3">{{ images[activeIndex].title }}</span>
        </div>

        <button
          ref="closeButton"
          type="button"
          class="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-xl transition hover:bg-white/20"
          aria-label="Close image viewer"
          @click="emit('close')"
        >
          &times;
        </button>
      </div>

      <div class="relative flex min-h-0 items-center justify-center">
        <img
          :src="images[activeIndex].image"
          :alt="images[activeIndex].alt"
          class="max-h-[72vh] w-auto max-w-full rounded-card border border-white/10 bg-portfolio-panel object-contain shadow-portfolio"
        />

        <button
          type="button"
          class="absolute left-2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-portfolio-purpleStrong md:left-5"
          aria-label="View previous image"
          @click="emit('previous')"
        >
          &larr;
        </button>

        <button
          type="button"
          class="absolute right-2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-portfolio-purpleStrong md:right-5"
          aria-label="View next image"
          @click="emit('next')"
        >
          &rarr;
        </button>
      </div>
    </div>
  </div>
</template>
