/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary: "#E8E2E2",
        bgcolor: "#F5EEE8",
        primary: "#D1B1A2",
        secondary: "#DFA394",
        headingColor: "#B17272",
        sectioncolor: "#D1B1A2",
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
