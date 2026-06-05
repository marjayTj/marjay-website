<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { NavLink } from '../types/portfolio'

const isOpen = ref<boolean>(false)
const activeHref = ref<string>('#start')
let sectionObserver: IntersectionObserver | null = null

const links: NavLink[] = [
  { label: '* Start />', href: '#start' },
  { label: '* Services />', href: '#services' },
  { label: '* Work />', href: '#work' },
  { label: '* Lab />', href: '#lab' },
  { label: '* About />', href: '#about' },
  { label: '* Contact />', href: '#contact' },
]

function closeMenu(): void {
  isOpen.value = false
}

function setActiveLink(href: string): void {
  activeHref.value = href
}

function getLinkClass(href: string): string {
  const isActive = activeHref.value === href

  return [
    'transition',
    isActive
      ? 'text-portfolio-cyan'
      : 'text-portfolio-soft hover:text-portfolio-cyan',
  ].join(' ')
}

function getMobileLinkClass(href: string): string {
  const isActive = activeHref.value === href

  return [
    'rounded-xl border px-4 py-3 font-black transition',
    isActive
      ? 'border-portfolio-line bg-portfolio-panel text-portfolio-cyan'
      : 'border-portfolio-line bg-portfolio-panel text-portfolio-soft',
  ].join(' ')
}

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleEntry?.target.id) {
        activeHref.value = `#${visibleEntry.target.id}`
      }
    },
    {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: [0.12, 0.25, 0.5, 0.75],
    },
  )

  links.forEach((link) => {
    const section = document.querySelector<HTMLElement>(link.href)
    if (section) {
      sectionObserver?.observe(section)
    }
  })
})

onUnmounted(() => {
  sectionObserver?.disconnect()
})
</script>

<template>
  <nav class="sticky inset-x-0 top-0 z-[100] border-b border-portfolio-line/80 bg-portfolio-bg/80 backdrop-blur-xl">
    <div class="portfolio-container flex min-h-[72px] items-center justify-between gap-6 max-md:min-h-[62px]">
      <a href="#start" class="text-xl font-black tracking-[-0.04em] text-portfolio-purple md:text-2xl">
        &lt;Marjay/&gt;
      </a>

      <div class="hidden items-center gap-5 text-sm font-extrabold md:flex">
        <a v-for="link in links" :key="link.href" :href="link.href" :class="getLinkClass(link.href)"
          @click="setActiveLink(link.href)">
          {{ link.label }}
        </a>
      </div>

      <button type="button"
        class="grid h-11 w-11 place-items-center rounded-xl border border-portfolio-line bg-portfolio-panel md:hidden"
        aria-label="Toggle navigation" @click="isOpen = !isOpen">
        <span class="grid gap-1.5">
          <span class="block h-0.5 w-5 rounded-full bg-portfolio-text transition"
            :class="{ 'translate-y-2 rotate-45': isOpen }"></span>
          <span class="block h-0.5 w-5 rounded-full bg-portfolio-text transition"
            :class="{ 'opacity-0': isOpen }"></span>
          <span class="block h-0.5 w-5 rounded-full bg-portfolio-text transition"
            :class="{ '-translate-y-2 -rotate-45': isOpen }"></span>
        </span>
      </button>
    </div>

    <div v-if="isOpen" class="border-t border-portfolio-line bg-portfolio-bg/95 px-5 py-4 shadow-portfolio backdrop-blur-xl md:hidden">
      <div class="grid gap-2">
        <a v-for="link in links" :key="link.href" :href="link.href"
          :class="getMobileLinkClass(link.href)"
          @click="setActiveLink(link.href); closeMenu()">
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
