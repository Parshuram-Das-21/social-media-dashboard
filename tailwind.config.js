/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'youtube': 'hsl(348, 97%, 39%)',
        'bg-top': '#f8f9fe',
        'bg-top-dark': '#1f212e',
      },
      backgroundImage: {
        'instagram': 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(5, 77%, 71%), hsl(329, 70%, 58%))',
      }
    },
  },
  plugins: [],
}
