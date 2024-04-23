module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'desaturatedBlue': '#8b97c6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
