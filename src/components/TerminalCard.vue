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
        <div>
          <span class="text-portfolio-purple">const</span> developer = {{ '{' }}
        </div>
        <div>
          <span class="text-portfolio-cyan">&nbsp;&nbsp;name:</span>
          <span class="text-portfolio-green">'Marjay C. Bumalod',</span>
        </div>
        <div>
          <span class="text-portfolio-cyan">&nbsp;&nbsp;stack:</span>
          <span class="text-portfolio-green">['Laravel',</span>
          <span class="text-portfolio-green">'Vue JS',</span>
          <span class="text-portfolio-green">'React']</span>
        </div>
        <div><span class="text-portfolio-cyan">&nbsp;&nbsp;focus:</span> <span class="text-portfolio-green">'
            Business automation',</span></div>
        <div><span class="text-portfolio-cyan">&nbsp;&nbsp;output:</span> <span class="text-portfolio-green">'Improve
            business
            operations'</span></div>
        <div>{{ '}' }}</div>
      </div>

      <div class="mt-8 rounded-[24px] border border-portfolio-line/80 bg-portfolio-panel/40 p-6">
        <div class="mb-5 flex items-center justify-between">
          <span class="text-xs font-black text-portfolio-muted">
            system.flow
          </span>

          <span
            class="inline-flex items-center gap-2 rounded-full border border-portfolio-line bg-portfolio-panelSoft px-3 py-1 text-[11px] font-black text-portfolio-green">
            <span class="h-2 w-2 animate-pulse rounded-full bg-portfolio-green"></span>
            API Online
          </span>
        </div>

        <div class="relative mx-auto h-[260px] max-w-[360px]">
          <!-- Orbit circles -->
          <div
            class="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-portfolio-borderStrong">
          </div>
          <div
            class="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-portfolio-borderStrong">
          </div>
          <div
            class="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-portfolio-borderStrong">
          </div>

          <!-- Center API -->
          <div
            class="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-portfolio-purpleStrong text-lg font-black text-white shadow-[0_0_45px_rgba(89,24,223,0.55)]">
            API
          </div>

          <!-- Nodes -->
          <div class="system-node left-0 top-[92px]">Business Logic</div>
          <div class="system-node right-0 top-[50px]">Reports</div>
          <div class="system-node bottom-[55px] right-2">Users</div>
          <div class="system-node bottom-[35px] left-[55px]">Rules</div>
          <div class="system-node left-[135px] top-0">Auth</div>
          <div class="system-node left-[130px] bottom-0">DB</div>
        </div>


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

.system-node {
  @apply absolute rounded-full border border-portfolio-line bg-portfolio-panelSoft px-3 py-1.5 text-xs font-black text-portfolio-soft shadow-card;
}

.system-node::before {
  content: "";
  @apply mr-2 inline-block h-2 w-2 rounded-full bg-portfolio-cyan;
}
</style>
