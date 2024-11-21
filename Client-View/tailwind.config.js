/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#053f5c",
        mediumBlue: "#236a8c",
        lightBlue: "#429ebd",
        darkOrange: "#f27f0c",
        lightOrange: "#f7ad19",
      },
      fontFamily: {
        leagueSpartan: ['"LeagueSpartan"', 'sans-serif'],
        comfortaa: ['"Comfortaa"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

