/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      lightBg:'#FFFEEC',
      primary:'#CBD83B',
      secondary:'#A88AED',
    }
    },
  },
  plugins: [],
}