/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sans'],
        'poppins': ['Poppins'],
        'volkhov': ['Volkhov'],
        "open-sans": ['Open Sans', 'Google Sans'],
        
      },
     
      backgroundImage: {
        'yellow-decore': "url('/src/assets/yellowdecore.svg')",
      },
      colors: {
        "favorite": "#14183E",
      }
    },
  },
  plugins: [],
}