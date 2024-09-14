/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html", "src/classes.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        bgc1: "rgb(var(--bgc1) / <alpha-value>)",
        bgc2: "rgb(var(--bgc2) / <alpha-value>)",
        bgc3: "rgb(var(--bgc3) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        ["textclr1"]: "rgb(var(--text1) / <alpha-value>)",
        ["textclr2"]: "rgb(var(--text2) / <alpha-value>)",
        ["textclr3"]: "rgb(var(--text3) / <alpha-value>)",
        ["textclr4"]: "rgb(var(--text4) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
