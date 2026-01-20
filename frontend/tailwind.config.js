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
        dark: "#212529",
        light: "#F0F3FB",
        primary: {
          50: "#f1fcfa",
          100: "#cff8ef",
          200: "#9ffe01",
          300: "#67e1cf",
          400: "#32ba9a",
          500: "#1fad9f",
          600: "#16b8b2",
          700: "#16b699",
          800: "#165955",
          900: "#174a47",
        },
        neutral: {
          50: "#f6f6f6",
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
