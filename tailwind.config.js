/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme1': '#ff0000',
        'theme2': '#000'
      }
    },
  },
  plugins: [],
}