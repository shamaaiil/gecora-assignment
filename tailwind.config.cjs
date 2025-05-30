/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkclr: "#F54E80", 
        teelclr: "#03A7A7", 
        orangeclr:"#FF7736",
        textclr:"#D5CCFF",
        blueclr : '#6D4EFF',
        purpleclr : "#6D4EFF",
        greenclr : "#D0FF16"
        
      },
      borderColor: (theme) => ({
        custom: "rgb(176 190 197 / var(--tw-border-opacity))",
      }),
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
});
