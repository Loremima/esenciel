/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#121A2B', deep: '#0D1320' },
        cream: { DEFAULT: '#F6F1E7', light: '#FBF8F2' },
        sand: { DEFAULT: '#EDE4D3', dark: '#E2D6BF' },
        ink: { DEFAULT: '#1B2333', soft: '#3A4253', muted: '#4F5768' },
        gold: { DEFAULT: '#C9973A', light: '#E8C47A', dark: '#8A6417' },
        clay: { DEFAULT: '#A85A35', light: '#F3E1D5' },
        sage: { DEFAULT: '#4D6B5E', light: '#DDE7DF' },
      },
      fontFamily: {
        heading: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: { prose: '68ch' },
      borderRadius: { arch: '999px 999px 1.5rem 1.5rem' },
      boxShadow: { soft: '0 1px 2px rgba(31,41,55,.04), 0 8px 24px -12px rgba(31,41,55,.18)' },
    },
  },
  plugins: [],
};
