/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'c-darkGrayishBlue': 'hsl(217, 19%, 35%)',
        'c-desaturatedDarkBlue': 'hsl(214, 17%, 51%)',
        'c-grayishBlue': 'hsl(212, 23%, 69%)',
        'c-lightGrayishBlue': 'hsl(210, 46%, 95%)',
      },
      fontSize: {
        'c-fontSizeDefault': '0.875rem'
      },
      fontFamily: {
        'c-FontFamilyDefault': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}