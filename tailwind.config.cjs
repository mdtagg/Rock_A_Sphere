/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'min': '1279px'},

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      //767
      'md': {'min': '767px','max': '900px'},
      // => @media (max-width: 767px) { ... }
      'sm': {
        'raw': `only screen and (max-height: 980px) and (max-width:480px)`
      },
      // 'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'wide': {
        'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
    },
    }
  },
  plugins:[]
}

