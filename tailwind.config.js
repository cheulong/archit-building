/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      mainColor: '#204C85',
      primaryColor: '#163055',
      secondaryColor: '#868F99',
    },
    extend: {},
  },
  plugins: [],
};
