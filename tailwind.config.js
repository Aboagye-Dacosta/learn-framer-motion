/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif", "ui-sans-serif", "system-ui"],
    },
    extend: {
      fontFamily: {
        display: ["Reddit Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
