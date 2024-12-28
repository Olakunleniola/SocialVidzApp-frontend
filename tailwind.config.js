/** @type {import('tailwindcss').Config} */
export default {
  content: [
    " ./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tomato: "#FF6347",
        dark: "#111f2f",
        light: "#f8f9fa"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
