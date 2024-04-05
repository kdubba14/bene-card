/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      display: "1.625rem",
    },
    extend: {
      colors: {
        "brand-pink": "#ED0E61",
        "brand-indigo-20": "#D3D2DE",
        "brand-indigo-100": "#211C5C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
