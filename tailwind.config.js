/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'golden': '#FFD700',
        'golden-light': '#FFA500',
        'dark-golden': '#B8860B',
        'warm-orange': '#FF8C00',
      },
      animation: {
        'shrink': 'shrink 0.5s ease-in-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        shrink: {
          '0%': { width: '95%' },
          '100%': { width: '75%' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};