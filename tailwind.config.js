/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E50914",
        black: "#0D0C11",
        lightBlack: "#17161B"
      }
    },
  },
  plugins: [],
}