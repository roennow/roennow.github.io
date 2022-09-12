/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      rotate: {
        360: "360deg",
      },
    },
    fontFamily: {
      futura: ["Futura", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
