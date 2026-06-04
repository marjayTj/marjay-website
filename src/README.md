# Vue 3 + Tailwind CSS + TypeScript Portfolio Prototype

A responsive software engineer portfolio prototype built with:

- Vue 3
- TypeScript
- Vite
- Tailwind CSS

## Sections

- Navbar with mobile menu
- Hero / Start section
- Terminal/code visual
- Work / Projects with product mockups
- Lab / Reusable modules
- About / Code-style profile
- Contact / Inquiry section
- Footer
- Sticky mobile CTA button

## Setup

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

```bash
http://localhost:5173
```

## Type Check

```bash
npm run type-check
```

## Build

```bash
npm run build
```

## Main Files

```text
src/types/portfolio.ts       # TypeScript interfaces/types
src/data/projects.ts         # Typed project and lab data
src/assets/main.css          # Tailwind component classes
tailwind.config.ts           # Theme colors, shadows, radius, font
src/App.vue                  # Main layout
src/components/              # Vue 3 components using <script setup lang="ts">
```
