module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif", "system-ui"],
        openSans: ["Open Sans"],
      },
      textColor: {
        blackLight: "#303135",
      },
      colors: {
        yellowNav: "#F4ECE5",
      },
      backgroundColor: {
        // light
        yellowLight: "#F0E7DB",
        yellowNav: "#F4ECE5",
        // dark
        bgDark: "#212123",
        blackLight: "#303135",
      },
    },
  },
  plugins: [],
};
