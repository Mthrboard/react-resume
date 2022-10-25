/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Open\\ Sans", "sans-serif"]
      },
      colors: {
        'summary': "#2079C7"
      }
    },
  },
  plugins: [],
}
