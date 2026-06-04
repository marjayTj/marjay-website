<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import WorkSection from './components/WorkSection.vue'
import LabSection from './components/LabSection.vue'
import AboutCodeSection from './components/AboutCodeSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-portfolio-bg text-portfolio-text sm:mx-8">
    <div class="glow-bg"></div>
    <div class="dot-grid"></div>

    <Navbar />

    <main>
      <HeroSection />
      <WorkSection />
      <LabSection />
      <AboutCodeSection />
      <ContactSection />
    </main>

    <FooterSection />

    <a href="#contact"
      class="fixed bottom-3 left-3 right-3 z-40 rounded-[20px] border border-portfolio-line bg-portfolio-bg/85 p-2 shadow-portfolio backdrop-blur-xl md:hidden">
      <span class="btn-primary w-full">Discuss a Project →</span>
    </a>
  </div>
</template>
