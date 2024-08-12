/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        leafbackgroudcolor: "rgb(18, 18, 18)",
        custompink: "#B6B3F3",
      },
      backgroundImage: {
        leaf: "url('/src/assets/leaf.png')",
      },
      fontFamily: {
        dmserif: "DM Serif Text",
        donegalone: "Donegal One",
        dmsans: "DM Sans",
      },
    },
  },
  plugins: [],
};
