/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#275555",
        "yellow-primary": "#EF9A4B",
        "green-secondary": "#80C270",
        "black-text": "#3D3D3D",
      },
    },
  },
  plugins: [],
};
