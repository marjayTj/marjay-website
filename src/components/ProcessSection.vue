<script setup lang="ts">
type ProcessStep = {
  number: string
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Analyze',
    description:
      'Understand business workflow, users, pain points, reports, and compliance requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Define modules, database structure, roles, UI/UX principles, and scope before coding.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop frontend, backend, validation, authorization, dashboards, and reports.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'Test, deploy, fix bugs, train users, and support the system after turnover.',
  },
]
</script>

<template>
  <section id="process" class="section-padding">
    <div class="portfolio-container">
      <div class="mb-12 grid items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div class="section-label">Process /&gt;</div>
          <h2 class="section-title">
            How I handle client projects
          </h2>
        </div>

        <p class="text-lg leading-8 text-portfolio-muted">
          This builds trust by showing that the project has structure from
          analysis to support.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <article v-for="step in processSteps" :key="step.number"
          class="portfolio-card group relative min-h-[230px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-portfolio-purple/60 md:p-7">
          <span
            class="pointer-events-none absolute right-4 top-3 text-6xl font-black tracking-[-0.08em] text-portfolio-disabled/35 transition group-hover:text-portfolio-purple/30"
            aria-hidden="true">
            {{ step.number }}
          </span>

          <div class="relative flex h-full flex-col">
            <span class="mb-10 text-sm font-black text-portfolio-purple">
              step.{{ step.number }}
            </span>

            <h3 class="mb-4 text-2xl font-black tracking-[-0.04em]">
              {{ step.title }}
            </h3>

            <p class="leading-7 text-portfolio-muted">
              {{ step.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
