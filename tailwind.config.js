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
          500: "#F44336", // Light tomato
          600: "#E53935", // Slightly darker tomato
          700: "#C62828", // Dark tomato
          800: "#B71C1C", // Even darker tomato
        },
        dark: "#111f2f",
        light: "#f8f9fa",
      },
      fontFamily: {
        ethnocentric: ['Ethnocentric', 'sans-serif'],
        aleo: ['Aleo', 'serif'] 
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rainbow': {
          'background': 'linear-gradient(to right, #B71C1C, #F44336, #ac2612, #B71C1C )',
          'background-clip': 'text',
          'color': 'transparent'
        },
        '.reverse-rainbow': {
          'background': 'linear-gradient(to left, #B71C1C, #F44336, #ac2612, #B71C1C )',
          'background-clip': 'text',
          'color': 'transparent'
        }
      });
    }),
  ],
  darkMode: "class",
};