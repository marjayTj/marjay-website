<script setup lang="ts">
defineProps<{
  image: string
  alt: string
}>()
</script>

<template>
  <div
    class="w-full overflow-hidden rounded-xl border border-white/10 bg-slate-100 shadow-[0_24px_70px_rgba(0,0,0,0.48)]">
    <div class="flex h-8 items-center gap-1.5 border-b border-slate-300 bg-slate-200 px-3 sm:h-9 sm:px-4">
      <span class="h-2 w-2 rounded-full bg-rose-400" aria-hidden="true"></span>
      <span class="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true"></span>
      <span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
      <span class="ml-2 h-3.5 max-w-48 flex-1 rounded-full border border-slate-300 bg-white/80"
        aria-hidden="true"></span>
    </div>

    <div class=" overflow-hidden bg-white">
      <img :src="image" :alt="alt"
        class="h-full w-full object-contain object-top transition duration-500 group-hover:scale-[1.01]" />
    </div>
  </div>
</template>
