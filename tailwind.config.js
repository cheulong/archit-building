/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        hero: '6.5fr 1.5fr 2fr 4.5fr 1fr 3.5fr',
      },
    },
  },
  plugins: [],
};
