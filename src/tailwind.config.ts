import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#08080D',
          panel: '#10101A',
          panelSoft: '#151522',
          codePanel: '#0E0E18',

          text: '#F8FAFC',
          soft: '#D8D8E8',
          muted: '#8B8EA3',
          disabled: '#4B4B68',

          line: '#2A2A3D',
          borderStrong: '#30304A',

          purple: '#7C3AED',
          purpleStrong: '#5918DF',
          cyan: '#22D3EE',
          green: '#22C55E',

          red: '#FB7185',
          yellow: '#FACC15',

          mockBg: '#F8FAFC',
          mockBorder: '#E2E8F0',
          mockMuted: '#94A3B8',
          mockLine: '#CBD5E1',
          mockBlue: '#2563EB',
          mockGreen: '#16A34A',
        },
      },

      fontFamily: {
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },

      boxShadow: {
        portfolio: '0 30px 90px rgba(0, 0, 0, 0.35)',
        card: '0 20px 60px rgba(0, 0, 0, 0.18)',
        purple: '0 18px 40px rgba(89, 24, 223, 0.28)',
      },

      borderRadius: {
        card: '24px',
        panel: '30px',
        section: '34px',
      },
    },
  },
  plugins: [],
} satisfies Config
