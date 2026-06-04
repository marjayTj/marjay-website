<script setup>
defineProps({
  type: {
    type: String,
    default: 'payroll',
  },
  title: {
    type: String,
    default: 'Dashboard Preview',
  },
})
</script>

<template>
  <div class="mock-browser min-h-[250px]">
    <div class="mock-top">
      <span class="mock-dot"></span>
      <span class="mock-dot"></span>
      <span class="mock-dot"></span>
    </div>

    <div class="p-4">
      <div class="mb-4 font-black text-slate-900">{{ title }}</div>

      <template v-if="type === 'pos'">
        <div class="grid min-h-[190px] grid-cols-[0.75fr_1fr] gap-3 max-md:grid-cols-1">
          <div class="rounded-xl bg-slate-900 p-4 max-md:hidden">
            <div class="mb-3 text-xs font-black text-white">POS Menu</div>
            <div class="grid gap-2">
              <div v-for="i in 5" :key="i" class="h-6 rounded-lg bg-white/10"></div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="i in 4"
              :key="i"
              class="rounded-xl border border-slate-200 bg-white p-3"
            >
              <div class="mb-2 h-8 rounded-lg bg-blue-100"></div>
              <div class="h-2 rounded-full bg-slate-300"></div>
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="type === 'map'">
        <div class="relative h-[210px] overflow-hidden rounded-2xl border border-slate-300 bg-gradient-to-br from-blue-100 to-slate-50">
          <div class="absolute left-[18%] top-[32%] h-3 w-3 rounded-full bg-blue-600"></div>
          <div class="absolute left-[46%] top-[42%] h-4 w-4 rounded-full bg-portfolio-purple"></div>
          <div class="absolute left-[35%] top-[65%] h-3.5 w-3.5 rounded-full bg-portfolio-green"></div>
          <div class="absolute right-[18%] top-[24%] h-2.5 w-2.5 rounded-full bg-portfolio-cyan"></div>
          <div class="absolute inset-8 rounded-[55%] border-2 border-dashed border-slate-300"></div>
          <div class="absolute inset-16 rounded-[52%] border-2 border-dashed border-slate-300"></div>
        </div>
      </template>

      <template v-else>
        <div class="mb-4 grid grid-cols-3 gap-3 max-md:grid-cols-1">
          <div class="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-500">
            Employees
            <strong class="block text-lg text-slate-900">128</strong>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-500">
            Net Payroll
            <strong class="block text-lg text-slate-900">₱2.4M</strong>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-500">
            Approvals
            <strong class="block text-lg text-slate-900">12</strong>
          </div>
        </div>

        <div class="grid gap-2">
          <div
            v-for="i in 5"
            :key="i"
            class="grid h-7 grid-cols-[1fr_80px_55px] items-center gap-3 rounded-lg bg-slate-100 px-3 max-md:grid-cols-[1fr_55px]"
          >
            <div class="h-2 rounded-full bg-slate-300"></div>
            <div class="h-2 rounded-full bg-blue-600"></div>
            <div class="h-2 rounded-full bg-green-500 max-md:hidden"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
