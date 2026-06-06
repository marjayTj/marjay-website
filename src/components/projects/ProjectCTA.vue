<template>
  <section class="section-padding pt-8">
    <div class="portfolio-container">
      <div class="relative overflow-hidden rounded-section bg-portfolio-purpleStrong p-8 shadow-portfolio md:p-12">
        <div
          class="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.25),transparent_68%)]"
        ></div>

        <div class="relative max-w-3xl">
          <div class="mb-5 text-sm font-black text-violet-100">Next Project /&gt;</div>
          <h2 class="mb-5 text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-[-0.06em]">
            Interested in a similar system?
          </h2>
          <p class="mb-8 leading-8 text-violet-100">
            This page can end with a contact button, project inquiry form, or direct link to email.
          </p>
          <div class="flex flex-wrap gap-3 max-sm:grid">
            <RouterLink to="/#work" class="btn-secondary">View other projects</RouterLink>
            <RouterLink to="/#contact" class="btn-primary">Contact me &rarr;</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
