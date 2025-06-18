/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        clash: ['Clash Display', 'Satoshi', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Satoshi', 'system-ui', 'sans-serif'],
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
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        '4xl': '0 45px 80px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};