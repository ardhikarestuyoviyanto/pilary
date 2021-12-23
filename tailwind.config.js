module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'price-background': "url('/assets/img/map.png')",
       }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
