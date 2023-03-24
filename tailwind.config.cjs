/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'min': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'min': '767px','max': '900px'},

      'sm': {
        'raw': `only screen and (max-height: 980px) and (max-width:480px)`
      },
      'wide': {
        'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
    },
    },
    keyframes: {
      inAnimation: {
        '0%': { opacity:'0' },
        '100%': { opacity: '1' }
      },
      outAnimation: {
        '0%': { opacity:'1' },
        '100%': { opacity:'0' }
      },
      rotateUp: {
        '0%': {rotate:'0deg'},
        '100%': {rotate:'360deg'}
      },
      rotateDown: {
        '0%': {rotate:'360deg'},
        '100%': {rotate:'0deg'}
      },
      moveRight: {
        '0%': {left:'0px'},
        '50%': {left: '10px'},
        '100%': {left:'0px'}
      },
      moveLeft: {
        '0%': {right:'0px'},
        '50%': {right: '10px'},
        '100%': {right:'0px'}
      }
    },
    animation: {
      fadeIn: 'inAnimation 350ms ease-in',
      fadeOut: 'outAnimation 350ms ease-out',
      spinUp:'rotateUp 350ms',
      spinDown:'rotateDown 350ms',
      bumpRight:'moveRight 350ms',
      bumpLeft:'moveLeft 350ms'
    }
  },
  plugins:[]
}

