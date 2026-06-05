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
  '   eligibility(){',
  "    return [",
  "      { examination: 'Civil Service Professional', dateExam: 'March 08, 2026', generalRating: '84.24%' },",
  '    ]',
  '  }',
  '',
  '   workExperience(){',
  "    return [",
  "      { agency: 'Isabela State University - Ilagan', role: 'Part-time I.T Instructor', duration: '2025-now' },",
  "      { company: 'The TileExpo Trading Inc', role: 'Chief of Staff/Business Development', duration: '2022-2025' },",
  '    ]',
  '  }',
  '',
  '  skills() {',
  '    return {',
  '      "design": ["UI/UX Design", "Figma", "Photoshop"],',
  '      "frontend": ["HTML", "CSS", "JavaScript", "Vue", "React", "Bootstrap", "Tailwind", "Vite"],',
  '      "backend": ["PHP", "Laravel", "Node.js", "Python"],',
  '      "databaseAndCloud": ["MySQL", "MongoDB", "Firebase", "Supabase"],',
  '      "toolsAndWorkflow": ["Git", "GitHub", "Docker", "npm", "yarn", "pnpm"],',
  '      "applicationPatterns": ["SPA", "WebSockets", "NativeScript", "WordPress"]',
  '    }',
  '  }',

  '  wishlistSkills() {',
  '    return {',
  '      "aiAndData": ["OpenClaw", "Python","R Programming"],',
  '      "apiAndBackend": ["GraphQL", "Go", "Redis"],',
  '      "infrastructure": ["Envoy Proxy", "NGINX", "Kubernetes", "CI/CD"]',
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
          My goal is to position myself as a software engineer who understands
          business operations, compliance, and emphatizing users.
        </p>
      </div>

      <div class="terminal-card overflow-hidden bg-[#1E1E1E]">
        <div class="flex min-h-12 items-center justify-between border-b border-[#2D2D2D] bg-[#181818] px-4">
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-[#FF5F57]"></span>
            <span class="h-3 w-3 rounded-full bg-[#FFBD2E]"></span>
            <span class="h-3 w-3 rounded-full bg-[#28C840]"></span>
          </div>

          <div class="hidden text-xs font-semibold text-[#858585] sm:block">
            AboutCodeSection.vue - Visual Studio Code
          </div>

          <div class="w-[60px]"></div>
        </div>

        <div class="border-b border-[#2D2D2D] bg-[#252526]">
          <div
            class="inline-flex min-h-10 items-center gap-2 border-r border-[#1E1E1E] bg-[#1E1E1E] px-4 text-sm font-semibold text-portfolio-soft">
            <span class="text-[#42B883]">Vue</span>
            <span>about.ts</span>
          </div>
        </div>

        <div class="bg-[#1E1E1E] p-6 max-md:p-4">
          <pre class="m-0 overflow-x-auto text-sm leading-7 max-md:text-[11px]"><code><span v-for="(line, index) in codeLines" :key="index"
              class="grid grid-cols-[44px_1fr] gap-5 max-md:grid-cols-[30px_1fr] max-md:gap-3"><span
                class="select-none text-right text-[#858585]">{{ String(index + 1).padStart(2, '0') }}</span><span
                class="whitespace-pre"><span v-for="(token, tokenIndex) in getCodeTokens(line)" :key="tokenIndex"
                  :class="token.className">{{ token.text }}</span></span></span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
