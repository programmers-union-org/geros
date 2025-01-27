/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgGray': '#F2F2F2',
      },
      colors: {
        'customBlue': 'rgb(0, 163, 224)',
      },
      fontFamily: {
        custom: ['ManifaPro2', 'sans-serif'],
        custom: ['Ghawar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}