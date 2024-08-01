/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almostWhite: 'hsl(0, 0%, 98%)',
        mediumGray: 'hsl(0, 0%, 41%)',
        almostBlack: 'hsl(0, 0%, 8%)',
      },
      boxShadow: {
        'even': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}
