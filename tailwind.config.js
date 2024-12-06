/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "#FA5757",
        softBlue: "#5368DF",
      },
    },
  },
  plugins: [],
};
