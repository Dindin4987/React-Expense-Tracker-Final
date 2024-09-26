/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0EF387",
        "secondary": "#FAFAFA",
        "black": "#000000",
        "tertiary": "#110f0f"
      },
    },
  },
  plugins: [],
}

