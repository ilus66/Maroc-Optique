/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e', // bleu nuit
        accent: '#e53935', // rouge léger
        secondary: '#f5f5f5', // gris clair
      },
      fontFamily: {
        sans: ['Montserrat', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
