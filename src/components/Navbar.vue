<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { NavLink } from '../types/portfolio'

const route = useRoute()
const isOpen = ref(false)
const activeHref = ref('#start')
let sectionObserver: IntersectionObserver | null = null

const links: NavLink[] = [
  { label: '* Start />', href: '#start' },
  { label: '* Services />', href: '#services' },
  { label: '* Process />', href: '#process' },
  { label: '* Work />', href: '#work' },
  { label: '* About />', href: '#about' },
  { label: '* Contact />', href: '#contact' },
]

function closeMenu(): void {
  isOpen.value = false
}

function setActiveLink(href: string): void {
  activeHref.value = href
  closeMenu()
}

function getLinkClass(href: string): string {
  const isActive = route.name === 'home' && activeHref.value === href

  return [
    'transition',
    isActive
      ? 'text-portfolio-cyan'
      : 'text-portfolio-soft hover:text-portfolio-cyan',
  ].join(' ')
}

function getMobileLinkClass(href: string): string {
  const isActive = route.name === 'home' && activeHref.value === href

  return [
    'rounded-xl border px-4 py-3 font-black transition',
    isActive
      ? 'border-portfolio-purple bg-portfolio-panel text-portfolio-cyan'
      : 'border-portfolio-line bg-portfolio-panel text-portfolio-soft',
  ].join(' ')
}

function disconnectObserver(): void {
  sectionObserver?.disconnect()
  sectionObserver = null
}

async function observeHomeSections(): Promise<void> {
  disconnectObserver()

  if (route.name !== 'home') return

  await nextTick()

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
}

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
    void observeHomeSections()
  },
  { immediate: true },
)

onBeforeUnmount(disconnectObserver)
</script>

<template>
  <nav class="sticky inset-x-0 top-0 z-[100] border-b border-portfolio-line/80 bg-portfolio-bg/80 backdrop-blur-xl">
    <div class="portfolio-container flex min-h-[72px] items-center justify-between gap-6 max-md:min-h-[62px]">
      <RouterLink
        to="/"
        class="text-xl font-black tracking-[-0.04em] text-portfolio-purple md:text-2xl"
        @click="closeMenu"
      >
        &lt;Marjay/&gt;
      </RouterLink>

      <div class="hidden items-center gap-5 text-sm font-extrabold md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.href"
          :to="{ path: '/', hash: link.href }"
          :class="getLinkClass(link.href)"
          @click="setActiveLink(link.href)"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-xl border border-portfolio-line bg-portfolio-panel md:hidden"
        aria-label="Toggle navigation"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span class="grid gap-1.5">
          <span
            class="block h-0.5 w-5 rounded-full bg-portfolio-text transition"
            :class="{ 'translate-y-2 rotate-45': isOpen }"
          ></span>
          <span
            class="block h-0.5 w-5 rounded-full bg-portfolio-text transition"
            :class="{ 'opacity-0': isOpen }"
          ></span>
          <span
            class="block h-0.5 w-5 rounded-full bg-portfolio-text transition"
            :class="{ '-translate-y-2 -rotate-45': isOpen }"
          ></span>
        </span>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="border-t border-portfolio-line bg-portfolio-bg/95 px-5 py-4 shadow-portfolio backdrop-blur-xl md:hidden"
    >
      <div class="grid gap-2">
        <RouterLink
          v-for="link in links"
          :key="link.href"
          :to="{ path: '/', hash: link.href }"
          :class="getMobileLinkClass(link.href)"
          @click="setActiveLink(link.href)"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
