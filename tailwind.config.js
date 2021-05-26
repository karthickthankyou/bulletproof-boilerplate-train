module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef1f1',
          100: '#fbd2d0',
          200: '#f9bfbd',
          300: '#f5928e',
          400: '#f1645f',
          500: '#ED3833',
          600: '#bc1610',
          700: '#8d110c',
          800: '#380705',
          900: '#170302',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
