/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "Matte-Black": "#28282B",
        "Snow": "#fbfffd",
        "Onyx-Color": "#0F0F0F"
      },
      fontFamily: {
        "Bespoke": "'Bespoke Sans', sans-serif",
        "Expose":"'Expose', sans-serif"
      }

    },
  },
  plugins: [],
}

