/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./layouts/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'pulse-slow':'pulse'
      },
      colors: {
        'negro-fondo': '#1c1c1c',
        'verde-moon': '#33f3a3',
        'verde-fondo': '#24563e',
        'verde-card': '#1c342c'
      },
      backgroundImage: {
        'moon': "url('../public/bgs/moonRising.png')",
      }
    }    
  },
  plugins: [],
}

