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
          midnight: '#101A35',
          royal: '#182547',
          deep: '#0A1022',
          card: '#131E3D',
          gold: '#D6AD55',
          goldLight: '#E8C57A',
          goldDark: '#B88E38',
          softGrey: '#F3F4F7',
          surface: '#F8FAFC',
          muted: '#8E9BB5',
          // Cyan & Blue accents retained for versatility
          cyan: '#1491C2',
          navy: '#031F51',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(214, 173, 85, 0.35)',
        'gold-sm': '0 0 15px -3px rgba(214, 173, 85, 0.25)',
        'cyan-glow': '0 0 25px -3px rgba(20, 145, 194, 0.35)',
        'premium': '0 20px 40px -15px rgba(10, 16, 34, 0.12)',
        'premium-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
