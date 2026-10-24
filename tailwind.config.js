/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parva: {
          cyan: '#1491C2',     // Bright Cyan Blue (Color 1)
          royal: '#245DA9',    // Royal Blue (Color 2)
          cobalt: '#132CA9',   // Vivid Cobalt Blue (Color 3)
          indigo: '#121481',   // Deep Indigo Blue (Color 4)
          navy: '#031F51',     // Deepest Navy Blue (Color 5)
          card: '#08255E',     // Elevated Card Blue
          cardDark: '#04173D', // Dark Background Blue
          softGrey: '#F3F4F7',
          surface: '#F8FAFC',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -3px rgba(20, 145, 194, 0.45)',
        'cyan-sm': '0 0 15px -3px rgba(20, 145, 194, 0.35)',
        'blue-glow': '0 0 30px -5px rgba(36, 93, 169, 0.5)',
        'premium': '0 20px 40px -15px rgba(3, 31, 81, 0.3)',
        'premium-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.55)',
      }
    },
  },
  plugins: [],
}
