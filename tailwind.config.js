/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
      screens: {
        xsm: '350px',
      },
    },
  },
  plugins: [],
};
