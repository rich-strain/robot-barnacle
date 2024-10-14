// Tailwind Material Vite Configuration From Material Tailwind Installation Docs
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      midnightBlue: '#25334d',
      dusk: '#51668c',
      blueGray: '#95a2ba',
      lightGray: '#e3e4e6',
    },
    extend: {},
  },
  plugins: [],
});

// Basic Tailwind Configuration
// /** @type {import('tailwindcss').Config} */

// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
