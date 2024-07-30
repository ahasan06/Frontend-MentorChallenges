/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing:{
        'extra-wide':'0.3em',
        'mega-wide':'0.6em'
      },
      colors: {
        'dark-gray': 'hsl(0, 0%, 63%)',
        'black': 'hsl(0, 0%, 0%)',
        'white': 'hsl(0, 0%, 100%)',
        'very-dark-gray': 'hsl(0, 0%, 27%)',
      },
    },
  },
  plugins: [],
}
