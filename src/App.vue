<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import FooterSection from './components/FooterSection.vue'
import Navbar from './components/Navbar.vue'

const route = useRoute()
const isHomePage = computed(() => route.name === 'home')
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip bg-portfolio-bg text-portfolio-text sm:mx-8">
    <Navbar />

    <RouterView />

    <FooterSection />

    <RouterLink :to="{ path: '/', hash: '#contact' }"
      class="fixed bottom-3 left-3 right-3 z-40 rounded-[20px] border border-portfolio-line bg-portfolio-bg/85 p-2 shadow-portfolio backdrop-blur-xl md:hidden">
      <!-- <span class="btn-primary w-full">
        {{ isHomePage ? 'Discuss a Project' : 'Contact me' }} &rarr;
      </span> -->
    </RouterLink>
  </div>
</template>
