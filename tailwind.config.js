/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Sans',
        'poppins': 'Poppins',
        'volkhov': 'Volkhov',
        "open-sans": ['Open Sans', 'Google Sans'],
        
      },
     
      backgroundImage: {
        'yellow-decore': "url('/src/assets/yellowdecore.svg')",
      },
      colors: {
        "favorite": "#14183E",
        "clear": "#5E6282",
        "blackk": "#080809",
        "brownn": "#84829A",
        "complete": "#8A79DF",
        "purple": "#5E6282",
        "top": "#14183E",
        "category": "#5E6282",
        "fav": "#14183E",
        "travel": "#181E4B",
        "suscribe": "#DFD7F9",
        "left": "#FF946D",
        "right": "#FF7D68 ",
        "footer":"#080809",
        "spiral": "#6246E5"
        
        
        
      }
    },
  },
  plugins: [],
}