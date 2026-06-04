<script setup>
defineProps({
  lab: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="portfolio-card min-h-[230px] p-6 transition hover:-translate-y-1 hover:border-portfolio-purple/80">
    <div class="mb-10 font-black text-portfolio-purple">
      {{ lab.number }}
    </div>

    <h3 class="mb-4 text-xl font-black leading-tight">
      {{ lab.title }}
    </h3>

    <p class="text-sm leading-6 text-portfolio-muted">
      {{ lab.description }}
    </p>
  </article>
</template>
