<script setup>
const contactItems = [
  'Email: your.email@example.com',
  'Location: Philippines',
  'Available: Freelance / Project-based / Consulting',
  'Links: GitHub / LinkedIn / Facebook Page',
]
</script>

<template>
  <section id="contact" class="section-padding">
    <div class="portfolio-container">
      <div class="relative overflow-hidden rounded-section bg-portfolio-purpleStrong p-9 shadow-portfolio max-md:p-6">
        <div class="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.23),transparent_70%)]"></div>

        <div class="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div class="mb-7 text-xl font-black text-violet-100">
              Contact /&gt;
            </div>

            <h2 class="mb-5 text-[clamp(2.25rem,5vw,3.875rem)] font-black leading-[1.04] tracking-[-0.07em]">
              Need a business system built?
            </h2>

            <p class="mb-7 max-w-2xl leading-7 text-violet-100">
              Contact me for payroll systems, employee management systems,
              dashboards, reports, custom web apps, and business automation projects.
            </p>

            <div class="grid gap-2 text-sm font-extrabold text-white">
              <span v-for="item in contactItems" :key="item">
                {{ item }}
              </span>
            </div>
          </div>

          <form class="grid gap-3 rounded-card border border-white/15 bg-portfolio-bg/70 p-5 backdrop-blur-xl">
            <div class="grid gap-2">
              <label class="text-xs font-black text-violet-200">Your Name</label>
              <input class="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40" placeholder="Client name" />
            </div>

            <div class="grid gap-2">
              <label class="text-xs font-black text-violet-200">Email Address</label>
              <input type="email" class="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40" placeholder="client@email.com" />
            </div>

            <div class="grid gap-2">
              <label class="text-xs font-black text-violet-200">Project Type</label>
              <input class="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40" placeholder="Payroll system, dashboard, automation..." />
            </div>

            <div class="grid gap-2">
              <label class="text-xs font-black text-violet-200">Message</label>
              <textarea class="min-h-28 resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="button" class="btn-primary">
              Send Inquiry →
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
