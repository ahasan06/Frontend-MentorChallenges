/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'check-bg': 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
         'mobile-dark': "url('./src/assets/bg-mobile-dark.jpg')",
        'desktop-dark': "url('./src/assets/bg-desktop-dark.jpg')",
      }
  
    },
  },
  plugins: [],
}
