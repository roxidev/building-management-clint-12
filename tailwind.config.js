/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        greatVibes: "'Great Vibes', cursive",
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [require('daisyui')],
};
