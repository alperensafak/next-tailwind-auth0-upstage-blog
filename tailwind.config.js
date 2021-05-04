module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkbg: '#171A23',
        darkblue: '#7891DF',
        darkp: '#C9C9CB',
        lightp: '#404040'
      },
      fontFamily: {
        title: ['Arapey', 'serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
