/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shrink': 'shrink 0.5s ease-in-out forwards',
      },
      keyframes: {
        shrink: {
          '0%': { width: '95%' },
          '100%': { width: '75%' },
        },
      },
    },
  },
  plugins: [],
};