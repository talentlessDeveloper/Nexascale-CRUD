/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgb(115, 115, 115)',
        accent: ' rgb(38, 38, 38)',
        darkPrimary: ' rgb(38, 38, 38)',
        darkSecondary: 'rgb(212, 212, 212)',
        darkAccent: 'rgb(250, 250, 250)',
      },
    },
  },
  plugins: [],
};
