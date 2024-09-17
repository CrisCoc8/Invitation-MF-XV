/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app.vue', './components/**/*.{vue,js}'],
  theme: {
    extend: {
      backgroundPosition: {
        'bkg-pos-xs': '20% 0%',
        'bkg-pos-md': '10% 0%',
        'bkg-pos-lg': '0% 0%',
        'bkg-pos-xl': '0% 0%',
        'bkg-top-xs': '15%',
        'bkg-top-lg': '0% 10%',
        'bkgw-pos-xs': '50% 0%',
        'bkgw-pos-md': '50% 0%',
        'bkgw-pos-lg': '50% 0%',
        'bkgw-pos-xl': '0% 10%',
      }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  plugins: [],
}

