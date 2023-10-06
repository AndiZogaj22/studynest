// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: '#000000',        // Text color
        background: '#f7f4f2',  // Background color
        primary: '#69a8cf',     // Primary color
        secondary: '#ece4df',   // Secondary color
        accent: '#61879e',      // Accent color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}