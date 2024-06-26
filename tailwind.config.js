/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary: "#E8E2E2",
        primary: "#e7b9a7",
        secondary: "#D1B1A2",
        tertiary: "#FBC8C7",
        fourth: "#8f5c5b",
        "pink-100": "#E5CABE",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      
    },
  },
  plugins: [],
};