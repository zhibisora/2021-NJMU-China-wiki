module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        // => @media (orientation: portrait) { ... }
        'landscape': { 'raw': '(orientation: landscape)' },
        // => @media (orientation: landscape) { ... }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
