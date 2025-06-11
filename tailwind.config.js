/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4", // cyan-500
        secondary: "#0891b2", // cyan-600
        accent: "#22d3ee", // cyan-400
        light: "#ecfeff", // cyan-50
        dark: "#164e63", // cyan-900
        header: "#155e75", // cyan-800 for header
      },
    },
  },
  plugins: [],
}
