/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#3AAFA9',
        'custom-blue': '#17252A',
        'custom-lt-green': '#3AAFA9',
        'custom-simple-white': '#DEF2F1',
        'custom-white': '#FEFFFF',
      },
    },
  },
  plugins: [],
};
