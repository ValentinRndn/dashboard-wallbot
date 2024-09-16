/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#3B82F6',
        'grey': '#3E3E3E',
        'light-grey': '#999999',
        'dark-blue': '#020817',
        'dark-blue2': '#00050c',
        'dark-progress': '#0E2043',
        'red': '#ff6262',
        'discord' : '#5865F2',
        'grey-discord': '#131417',
      },
      fontFamily: {
        // 'cgothic': ['c-gothic', 'sans-serif'],
        // 'helvetica': ['Helvetica', 'sans-serif'],
        // 'dm-serif': ['DMSerifDisplay', 'serif'],
        // 'jost': ['jost', 'serif'],
        // 'jost-sans': ['Jost', 'sans-serif'],
        // 'poppins': ['Poppins-Regular', 'sans-serif'],
        // 'raleway': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        // 'phone': 'url("../assets/phone-back.png")',

      },    
      fontSize: {
        // 'login-txt': '0.60rem',
      },
      screens: {
        'sm': {'max': '639px'}, // jusqu'à 640px
        'md': {'max': '767px'}, // jusqu'à 768px
        'lg': {'max': '1023px'}, // jusqu'à 1024px
        'xl': {'max': '1279px'}, // jusqu'à 1280px
        '2xl': {'max': '1535px'}, // jusqu'à 1536px
      },
    },
  },
  plugins: [],
}