/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  // @keyframes pulse {
  //   50% {
  //     opacity: .5;
  //   }
  // }
  // .animate-pulse {
  //   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  // }
  theme: {
    fontFamily: {
      primary: ['Press Start 2P', ...fontFamily.sans]
    },
    extend: {
      colors: {
        primary: '#04a5df',
        secondary: '#04a5df',
        aliceBlue: '#EDF5FC',
        back: '#191516'
      }
    }
  },
  plugins: []
}
