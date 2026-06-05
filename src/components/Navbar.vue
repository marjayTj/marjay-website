<script setup lang="ts">
import { ref } from 'vue'
import type { NavLink } from '../types/portfolio'

const isOpen = ref<boolean>(false)

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
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-portfolio-line/80 bg-portfolio-bg/75 backdrop-blur-xl">
    <div class="portfolio-container flex min-h-[78px] items-center justify-between gap-6 max-md:min-h-[68px]">
      <a href="#start" class="text-2xl font-black tracking-[-0.04em] text-portfolio-purple">
        &lt;Marjay/&gt;
      </a>

      <div class="hidden items-center gap-7 text-sm font-extrabold text-portfolio-soft md:flex">
        <a v-for="link in links" :key="link.href" :href="link.href" class="transition hover:text-portfolio-cyan">
          {{ link.label }}
        </a>
      </div>

      <button type="button"
        class="grid h-12 w-12 place-items-center rounded-xl border border-portfolio-line bg-portfolio-panel md:hidden"
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

    <div v-if="isOpen" class="border-t border-portfolio-line bg-portfolio-bg/95 px-5 py-4 backdrop-blur-xl md:hidden">
      <div class="grid gap-2">
        <a v-for="link in links" :key="link.href" :href="link.href"
          class="rounded-xl border border-portfolio-line bg-portfolio-panel px-4 py-3 font-black text-portfolio-soft"
          @click="closeMenu">
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
