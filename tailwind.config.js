/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "400px",
        tablet: "500px",
      },
      colors: {
        secondaryBlue: "#0156FF",
        PrimaryGray: "#ACACAC",
        PrimaryBlue: "rgb(230, 235, 255)",
        PrimaryPurple: "#272560",
      },
      keyframes: {
        Accardion: {
          "0%": { opacity: `${0}` },
          "100%": { opacity: `${1}` },
        },
        OpenModal: {
          "0%": { opacity: `${0}` },
          "100%": { opacity: `${1}` },
        },
      },
      animation: {
        Accardion: "Accardion .3s ease forwards",
        Opacity: "Accardion .8s ease forwards",
        OpenModal: "OpenModal .5s ease forwards",
      },
    },
  },
  plugins: [],
};
