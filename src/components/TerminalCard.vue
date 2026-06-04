<template>
  <div class="terminal-card relative min-h-[520px] overflow-hidden max-md:min-h-0">
    <div
      class="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(89,24,223,0.62),transparent_68%)]">
    </div>

    <div class="relative flex h-16 items-center gap-2.5 border-b border-portfolio-borderStrong px-6">
      <span class="h-3 w-3 rounded-full bg-portfolio-red"></span>
      <span class="h-3 w-3 rounded-full bg-portfolio-yellow"></span>
      <span class="h-3 w-3 rounded-full bg-portfolio-green"></span>
      <span class="ml-3 text-xs font-black text-portfolio-muted">
        business-system.config.ts
      </span>
    </div>

    <div class="relative p-8 max-md:p-5">
      <div class="grid gap-3 text-lg text-portfolio-soft max-md:text-sm">
        <div><span class="text-portfolio-purple">const</span> developer = {{ '{' }}</div>
        <div><span class="text-portfolio-cyan">&nbsp;&nbsp;name:</span> <span class="text-portfolio-green">'Marjay
            C. Bumalod',</span></div>
        <div><span class="text-portfolio-cyan">&nbsp;&nbsp;stack:</span> <span class="text-portfolio-green">['Laravel',
            'Vue', 'TypeScript'],</span></div>
        <div><span class="text-portfolio-cyan">&nbsp;&nbsp;focus:</span> <span class="text-portfolio-green">'Payroll +
            Business Automation',</span></div>
        <div><span class="text-portfolio-cyan">&nbsp;&nbsp;output:</span> <span class="text-portfolio-green">'Systems
            that improve operations'</span></div>
        <div>{{ '}' }}</div>
      </div>

      <div class="relative mt-10 grid h-[260px] place-items-center max-md:h-[220px]">
        <div
          class="absolute h-[150px] w-[150px] rounded-full border border-[#2B2B42] max-md:h-[115px] max-md:w-[115px]">
        </div>
        <div
          class="absolute h-[230px] w-[230px] rounded-full border border-[#2B2B42] max-md:h-[175px] max-md:w-[175px]">
        </div>
        <div
          class="absolute h-[310px] w-[310px] rounded-full border border-[#2B2B42] max-md:h-[235px] max-md:w-[235px]">
        </div>

        <div
          class="z-10 grid h-20 w-20 place-items-center rounded-full bg-portfolio-purpleStrong font-black shadow-[0_0_40px_rgba(89,24,223,0.5)] max-md:h-16 max-md:w-16">
          API
        </div>

        <div class="node-pill left-5 top-20 max-md:left-0 max-md:top-16">Payroll</div>
        <div class="node-pill right-10 top-8 max-md:right-0 max-md:top-5">Reports</div>
        <div class="node-pill bottom-14 right-5 max-md:bottom-10 max-md:right-0">Users</div>
        <div class="node-pill bottom-4 left-24 max-md:bottom-2 max-md:left-16">Rules</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.node-pill {
  @apply absolute rounded-full border border-portfolio-line bg-portfolio-panelSoft px-3 py-1.5 text-xs font-black text-portfolio-soft max-md:text-[10px];
}

.node-pill::before {
  content: "";
  @apply mr-2 inline-block h-2 w-2 rounded-full bg-portfolio-cyan;
}
</style>
