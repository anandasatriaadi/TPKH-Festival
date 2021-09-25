module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        101: "1.01",
        105: "1.05",
      },
      maxWidth: {
        xxs: "15rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
