/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.5rem',
        xl: '5rem'
      }
    },
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#0D2825',
        'green': '#32B9A9',
        'gray-dark': '#606968',
        'gray-light': '#F1F5F5'

      }
    },
  },
  plugins: [],
}