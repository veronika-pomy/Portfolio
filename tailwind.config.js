/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        gold: "#856e48",
        dark: "#2d3033",
        light: "#f0f0f0",
        blue: "#7d9fb9",
        grey: "#71717a"
      },
      fontFamily: {
        crimson: ["Crimson Text","serif"],
        muktaam: ["Mukta Mahee", "sans-serif"]
      },
      fontSize: {
        sm: '1.2rem',
      },
      scale: {
        '-100': '-1',
      },
    },
    screens: {
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [],
}

