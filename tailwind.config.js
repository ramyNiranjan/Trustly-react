/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ee06e",
        secondary: "#00303f",
      },
      backgroundImage: {
        hero: "url('../src/assets/hero-start.png')",
      },
      screens: {
        "trustly-screen": "440px",
      },
    },
  },
  plugins: [],
};
