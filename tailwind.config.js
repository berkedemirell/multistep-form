/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script.js',
  ],
  theme: {
    extend: {
      screens: {
        'l' : {'max': '1125px'},
        'm' : {'max': '930px'},
        'mm' : {'max': '825px'},
      },
      width: {
        'add-ons' : '30rem',
        'res-add-ons' : '22rem',
        'res-add-ons2' : '17rem',
        'thanks' : '25rem',
        'res-thanks': '20rem',
      },
      fontFamily: {
        'ubu' : ['Ubuntu']
      },
      backgroundImage: {
        'sidebar' : "url('/assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        'marine': 'hsl(213, 96%, 18%)', 
        'purpleBlue': 'hsl(243, 100%, 62%)', 
        'pastel': 'hsl(228, 100%, 84%)', 
        'light': 'hsl(206, 94%, 87%)', 
        'strawberry': 'hsl(354, 84%, 57%)', 
        'coolGray': 'hsl(231, 11%, 63%)', 
        'lightGray': 'hsl(229, 24%, 87%)', 
        'magnolia': 'hsl(217, 100%, 97%)', 
        'alabaster': 'hsl(231, 100%, 99%)', 
        'white': 'hsl(0, 0%, 100%)',
        'red': 'hsl(0, 100%, 50%)',
      }
    },
  },
  plugins: [],
}

