/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- Color Tokens (atom) ---
        // Grounded in the three heritage sites rather than a generic palette.
        lagoon: {
          DEFAULT: '#0E5C63', // Hundred Islands lagoon water
          light: '#3E8B8F',
          dark: '#093F44',
        },
        limestone: {
          DEFAULT: '#EDE6D6', // karst rock / sand, primary background
          50: '#FAF8F2',
        },
        brick: {
          DEFAULT: '#A64B2A', // Bolinao Lighthouse brick, primary accent
          dark: '#7E3A20',
        },
        ember: {
          DEFAULT: '#D69A2D', // Balungao Hot Spring warmth, secondary accent
        },
        basalt: {
          DEFAULT: '#16211F', // near-black text / rock shadow
        },
        foam: {
          DEFAULT: '#FAFBF8', // sea foam surface white
        },
      },
      fontFamily: {
        // Deliberate choice, not a fallback: a self-hosted or Google Fonts
        // webfont costs 20-150KB and a render-blocking (or layout-shifting)
        // network request per weight — real cost on 3G/4G. These stacks
        // pick the most characterful serif/mono actually installed on each
        // OS, so the "Lightning Fast" requirement never trades against
        // typography. See Framework Selection Report, Performance section.
        display: [
          'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L',
          'Book Antiqua', 'Georgia', 'serif',
        ],
        body: [
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          'Helvetica Neue', 'Arial', 'sans-serif',
        ],
        mono: [
          'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas',
          'Liberation Mono', 'monospace',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
