/* tailwind.config.js */
const path = require('path');
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
     extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'midnight': '#7743DB',
        'bubblegum': '#ff77e9',
        'dark':'#000000',
        'content':'#292929',
        'essay':'#C3B9EA',
        'dev':'#565656',
        'whiter':'#f8fafc',
        'lessGray':'#cbd5e1',
        'body':'#e1e1e1',
        'lessWhite':'#BEAEE2',
        'greener':'#79B4B7'
      },
    
   },
   variants: {
     extend: {},
   },
   plugins: [
    addDynamicIconSelectors()
   ],
 }