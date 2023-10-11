/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [],
}