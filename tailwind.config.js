/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        tomato: {
          500: "#FF6347", // Light tomato
          600: "#E53935", // Slightly darker tomato
          700: "#E5533B", // Dark tomato
          800: "#B71C1C", // Even darker tomato
        },
        dark: "#121212",
        light: "#FFFFFF",
      },
      
      backgroundImage: {
        'bgLight': "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/background.png')",
      },

      fontFamily: {
        ethnocentric: ['Ethnocentric', 'sans-serif'],
        montserrat: ["Montserrat", 'serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rainbow': {
          'background': 'linear-gradient(to right, #B71C1C, #F44336, #ac2612, #F44336 )',
          'background-clip': 'text',
          'color': 'transparent'
        },
      });
    }),
  ],

  darkMode: "class",
};