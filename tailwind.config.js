/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        primary: '#232946',
        second: '#ff8906',
        paragraf: '#64748b',
      },
      fontFamily: {
        caveat: ['Caveat'],
      },
      screens: {
        xl: '1320px',
        sm: '428px',
        maxsm: '315px',
      },
      backgroundImage: {
        bgdark: 'url(../img/bgdark.jpg)',
      },
    },
  },
  plugins: [],
};
