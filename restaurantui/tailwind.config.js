/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D4B9",
        dark: "#303030",

      },
      fontFamily:{
        inter: ["Inter", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm:'2rem',
          lg:'3rem',
          xl:'4rem',
          
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
