<script setup>
const codeLines = [
  "class YajBirel {",
  "  // I build systems because I understand business workflows.",
  "  constructor() {",
  "    this.role = 'Software Engineer';",
  "    this.focus = ['Payroll', 'Operations', 'Reports'];",
  "    this.stack = ['Laravel', 'Vue', 'MySQL'];",
  "  }",
  "  services() {",
  "    return ['Web Systems', 'Automation', 'Dashboards'];",
  "  }",
  "}",
]

const bullets = [
  'Full-stack Laravel and Vue development',
  'Payroll, attendance, employee, and reporting workflows',
  'Dashboards, PDF exports, Excel exports, and data processing',
  'System planning, authorization, validation, and deployment',
]
</script>

<template>
  <section id="about" class="section-padding">
    <div class="portfolio-container">
      <div class="mb-12 grid items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div class="section-label">About /&gt;</div>
          <h2 class="section-title">
            I combine code with business workflow understanding.
          </h2>
        </div>

        <p class="text-lg leading-8 text-portfolio-muted">
          The goal is to position you as a software engineer who understands
          operations, payroll, reporting, and real users.
        </p>
      </div>

      <div class="terminal-card overflow-hidden">
        <div class="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div class="border-b border-portfolio-line p-8 lg:border-b-0 lg:border-r max-md:p-5">
            <div
              v-for="(line, index) in codeLines"
              :key="index"
              class="grid grid-cols-[38px_1fr] gap-4 text-sm leading-7 max-md:grid-cols-[26px_1fr] max-md:text-[11px]"
            >
              <span class="text-right text-portfolio-disabled">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <span
                :class="{
                  'text-portfolio-muted': line.includes('//'),
                  'text-portfolio-green': line.includes('this.') || line.includes('return'),
                  'text-portfolio-soft': !line.includes('//') && !line.includes('this.') && !line.includes('return'),
                }"
              >
                {{ line }}
              </span>
            </div>
          </div>

          <div class="grid content-center p-8 max-md:p-5">
            <h3 class="mb-5 text-3xl font-black leading-tight tracking-[-0.05em]">
              Business-focused software development.
            </h3>

            <p class="mb-6 leading-7 text-portfolio-muted">
              I can help clients move from manual processes into structured web
              systems with clean interfaces, clear reports, and reliable workflows.
            </p>

            <div class="grid gap-3">
              <div
                v-for="bullet in bullets"
                :key="bullet"
                class="flex gap-3 font-extrabold text-portfolio-soft"
              >
                <span class="text-portfolio-purple">›</span>
                <span>{{ bullet }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
