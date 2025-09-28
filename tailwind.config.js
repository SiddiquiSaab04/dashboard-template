/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      navbarLightBg:'#E1EEFD',
      sidebarLightBg:'#7F697D',
    }
    },
  },
  plugins: [],
}