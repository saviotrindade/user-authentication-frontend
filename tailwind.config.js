/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "details" : "#FB2D45",
        "white" : "#FFF",
        "primary+1" : "#333333",
        "primary" : "#1F1F1F",
        "primary-1" : "#0F0F0F",
        "neutral" : "#767676"
      },
      fontFamily: {
        "roboto" : "'Roboto'",
      },
      backgroundImage: {
        "wallpaper" : "url(./wallpaper.svg)"
      },
      fontSize: {
        "6.5xl" : "4rem"
      }
    },
  },
  plugins: [],
}