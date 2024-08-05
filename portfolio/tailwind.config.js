/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#ccf381',
        'custom-blue': '#4831d4',
        'custom-white': '#ffffff',
      },
    },
  },
  plugins: [],
};
