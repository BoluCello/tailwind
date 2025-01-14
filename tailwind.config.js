/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", ".app.js"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        big: "48rem",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
