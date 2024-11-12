/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff3333",
        secondry: {
          100: "#9dc3ff",
          200: "#5b9aff"
        }
      },
      fontFamily: {
        bodyFont: ['SUSE']
      }
    },
  },
  plugins: [],
};
