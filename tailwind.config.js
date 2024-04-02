/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['focus', 'group-focus', 'group-hover'],
      colors: {
        'rgba-blue-300': 'rgb(54, 107, 211)',
        'rgba-blue-500': 'rgba(41, 59, 96, 0.9)',
        'rgba-blue-600': 'rgba(0, 28, 83, 0.8)',
       'rgba-blue-400': 'rgba(85, 207, 245, 0.4)',
        'rgba-yellow-400': 'rgba(228, 232, 43, 0.58)',
        'rgba-green-400':'rgba(67, 137, 34, 0.533)'
      },
    },
  },
  plugins: [],
}