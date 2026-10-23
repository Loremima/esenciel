/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF6EE', light: '#FFFDF9' },
        sand: { DEFAULT: '#F2EBDD', dark: '#E2D7C2' },
        ink: { DEFAULT: '#1F2937', soft: '#374151', muted: '#5B6472' },
        gold: { DEFAULT: '#C99A2E', light: '#EBC65E', dark: '#8A6417' },
        clay: { DEFAULT: '#A85A35', light: '#F3E1D5' },
        sage: { DEFAULT: '#4D6B5E', light: '#DDE7DF' },
      },
      fontFamily: {
        heading: ['"Playfair Display Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: { prose: '68ch' },
      borderRadius: { arch: '999px 999px 1.5rem 1.5rem' },
      boxShadow: { soft: '0 1px 2px rgba(31,41,55,.04), 0 8px 24px -12px rgba(31,41,55,.18)' },
    },
  },
  plugins: [],
};
