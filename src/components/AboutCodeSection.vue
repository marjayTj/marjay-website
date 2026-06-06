<script setup lang="ts">
const codeLines: string[] = [
  'class MarjayBumalod {',
  '  // Business workflows translated into software.',
  '  // Skills is continuously improving and expanding.',
  '',
  '  constructor() {',
  "    this.name = 'Marjay C. Bumalod'",
  "    this.dayOfBirthTimeStamp = 827539200",
  "    this.email = 'marjay.bumalod24@gmail.com'",
  '    this.focus = [',
  "      'web/mobile applications',",
  "      'data science',",
  "      'machine learning',",
  "      'AI engineering',",
  "      'UI/UX Design',",
  '    ]',
  "    this.stack = [",
  "      'Laravel',",
  "      'Vue',",
  "      'React',",
  "      'Mysql',",
  '    ]',
  '  }',
  '',
  '  eligibility() {',
  '    return [',
  '      {',
  "        examination: 'Civil Service Professional',",
  "        dateExam: 'March 08, 2026',",
  "        generalRating: '84.24%',",
  '      },',
  '    ]',
  '  }',
  '',
  '  education() {',
  '    return [',
  '      {',
  "        school: 'Isabela State University - Cauayan',",
  "        graduateStudy: 'Master in Information Technolgoy (MIT)',",
  "        completed: true,",
  '      },',
  '      {',
  "        school: 'Isabela State University - Echague',",
  "        graduateStudy: 'Master in Business Administration (MBA)',",
  "        completed: false,",
  '      },',
  '    ]',
  '  }',
  '',
  '  workExperience() {',
  '    return [',
  '      {',
  "        agency: 'Isabela State University - Ilagan',",
  "        role: 'Part-time I.T Instructor',",
  "        duration: '2025-now',",
  '      },',
  '      {',
  "        company: 'The TileExpo Trading Inc',",
  "        role: 'Chief of Staff/Business Development',",
  "        duration: '2022-2025',",
  '      },',
  '    ]',
  '  }',
  '',
  '  skills() {',
  '    return {',
  '      "design": ["UI/UX Design", "Figma", "Photoshop"],',
  '      "frontend": [',
  '        "HTML",',
  '        "CSS",',
  '        "JavaScript",',
  '        "Vue",',
  '        "React",',
  '        "Bootstrap",',
  '        "Tailwind",',
  '        "Vite",',
  '      ],',
  '      "backend": ["PHP", "Laravel", "Node.js", "Python"],',
  '      "databaseAndCloud": ["MySQL", "MongoDB", "Firebase", "Supabase"],',
  '      "toolsAndWorkflow": ["Git", "GitHub",  "npm", "yarn", "pnpm"],',
  '      "applicationPatterns": [',
  '        "SPA",',
  '        "WebSockets",',
  '        "NativeScript",',
  '        "WordPress",',
  '      ],',
  '    }',
  '  }',

  '  wishlistSkills() {',
  '    return {',
  '      "aiAndData": ["OpenClaw", "Python", "R Programming"],',
  '      "apiAndBackend": ["GraphQL", "Go", "Redis"],',
  '      "infrastructure": ["Envoy Proxy", "NGINX", "Docker","Kubernetes", "CI/CD"],',
  '    }',
  '  }',
  '}',
]

type CodeToken = {
  text: string
  className: string
}

const keywordClasses: Record<string, string> = {
  class: 'text-[#569CD6]',
  constructor: 'text-[#DCDCAA]',
  return: 'text-[#C586C0]',
}

function getCodeTokens(line: string): CodeToken[] {
  const commentStart = line.indexOf('//')

  if (commentStart >= 0) {
    return [
      { text: line.slice(0, commentStart), className: 'text-portfolio-soft' },
      { text: line.slice(commentStart), className: 'text-[#6A9955]' },
    ]
  }

  const tokens: CodeToken[] = []
  let index = 0

  while (index < line.length) {
    const rest = line.slice(index)

    if (/^\s+/.test(rest)) {
      const [match] = rest.match(/^\s+/) as RegExpMatchArray
      tokens.push({ text: match, className: 'text-portfolio-soft' })
      index += match.length
      continue
    }

    if (rest.startsWith("'") || rest.startsWith('"')) {
      const quote = rest[0]
      const endIndex = rest.indexOf(quote, 1)
      const value = endIndex >= 0 ? rest.slice(0, endIndex + 1) : rest
      const afterValue = rest.slice(value.length).trimStart()
      const isObjectKey = quote === '"' && afterValue.startsWith(':')

      tokens.push({
        text: value,
        className: isObjectKey ? 'text-portfolio-soft' : 'text-[#CE9178]',
      })
      index += value.length
      continue
    }

    if (/^\d+/.test(rest)) {
      const [match] = rest.match(/^\d+/) as RegExpMatchArray
      tokens.push({ text: match, className: 'text-[#B5CEA8]' })
      index += match.length
      continue
    }

    if (/^this\.[A-Za-z_$][\w$]*/.test(rest)) {
      const [match] = rest.match(/^this\.[A-Za-z_$][\w$]*/) as RegExpMatchArray
      tokens.push({ text: match, className: 'text-portfolio-green' })
      index += match.length
      continue
    }

    if (/^[A-Za-z_$][\w$]*/.test(rest)) {
      const [match] = rest.match(/^[A-Za-z_$][\w$]*/) as RegExpMatchArray
      tokens.push({
        text: match,
        className: keywordClasses[match] ?? 'text-portfolio-soft',
      })
      index += match.length
      continue
    }

    tokens.push({ text: rest[0], className: 'text-[#808080]' })
    index += 1
  }

  return tokens.length ? tokens : [{ text: ' ', className: 'text-portfolio-soft' }]
}
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
          I design software with empathy for users, aligning business workflows,
          usability, and clean interfaces into practical digital systems.
        </p>
      </div>

      <div class="terminal-card max-w-full overflow-hidden rounded-[18px] bg-[#1E1E1E] md:rounded-panel">
        <div
          class="flex min-h-11 items-center justify-between border-b border-[#2D2D2D] bg-[#181818] px-3 md:min-h-12 md:px-4">
          <div class="flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full bg-[#FF5F57] md:h-3 md:w-3"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] md:h-3 md:w-3"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-[#28C840] md:h-3 md:w-3"></span>
          </div>

          <div class="hidden text-xs font-semibold text-[#858585] sm:block">
            AboutCodeSection.vue - Visual Studio Code
          </div>

          <div class="w-[50px] md:w-[60px]"></div>
        </div>

        <div class="border-b border-[#2D2D2D] bg-[#252526]">
          <div
            class="inline-flex min-h-9 max-w-full items-center gap-2 border-r border-[#1E1E1E] bg-[#1E1E1E] px-3 text-xs font-semibold text-portfolio-soft md:min-h-10 md:px-4 md:text-sm">
            <span class="text-[#42B883]">Vue</span>
            <span>about.ts</span>
          </div>
        </div>

        <div class="min-w-0 bg-[#1E1E1E] p-3 md:p-6">
          <pre
            class="m-0 max-h-[520px] min-w-0 overflow-y-auto overflow-x-hidden pb-2 text-[11px] leading-6 md:max-h-none md:text-sm md:leading-7"><code><span v-for="(line, index) in codeLines" :key="index"
              class="grid min-w-0 grid-cols-[30px_minmax(0,1fr)] items-start gap-3 md:grid-cols-[44px_minmax(0,1fr)] md:gap-5"><span
                class="select-none text-right text-[#858585]">{{ String(index + 1).padStart(2, '0') }}</span><span
                class="min-w-0 whitespace-pre-wrap break-words"><span v-for="(token, tokenIndex) in getCodeTokens(line)" :key="tokenIndex"
                  :class="token.className">{{ token.text }}</span></span></span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
