/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-green": "#308A54",
        "regal-black": "#2B2B2B",
        "regal-gray": "#767676",
        "regal-yellow": "#FFB400",
      },
    },
  },
  plugins: [],
};
