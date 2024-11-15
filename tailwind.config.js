/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightwhite: "#f2f2f2",
        lightgrayed: "#717d8b",
        littlegray: "#dce1ed",
        deepgray: "#c4cbdd",
      },
      fontSize: {
        six: "6px",
      },
    },
  },
  plugins: [],
};
