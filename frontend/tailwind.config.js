module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "poppins, sans-serif",
        sans: "poppins, sans-serif",
        heading: "merriweather, serif",
      },
      colors: {
        primary: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#e0cdd7",
          300: "#e0cdd7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18077",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
          950: "#072c2b",
        },
        neutral: {
          50: "#f5f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
