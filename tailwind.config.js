// tailwind.config.js
export default {
  darkMode: 'class', // Enables manual dark mode toggling via a 'dark' class
  content: [
    './index.html',           // Main HTML file
    './src/**/*.{js,ts,jsx,tsx}' // All JS/TS/React files in src/
  ],
  theme: {
    extend: {
      // You can customize your theme here (colors, fonts, etc.)
    },
  },
  plugins: [],
}