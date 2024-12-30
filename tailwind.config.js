/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme1': '#ff0000',
        'theme2': '#1a3d6b',
        'theme3': '#004436',
        'theme4': '#f4ece7',
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
}