/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: "#020F1B",
        black: "#05111B",
        yellow: "#FFF600",

        primaryZinc: "#282B2C",
        secondaryZinc: "#1B1E20",

        grey: '#A3AED0',
      },
    },  
  },
  plugins: [],
}

