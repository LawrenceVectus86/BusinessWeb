/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
    animation: {
      'scroll-left': 'scrollLeft 20s linear infinite',
    },
    keyframes: {
      scrollLeft: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [],
}

