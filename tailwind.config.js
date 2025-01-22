/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      gridTemplateColumns: {
        'custom': '0.5fr 2fr 1fr 1fr  1.5fr', // Custom grid template
      },

      fontFamily: {
        outfit: ['Outfit']
      }
    },
  },
  plugins: [],
}

