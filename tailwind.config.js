/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      ["light"],
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#0FCFEC",

          accent: "#0FCFEC",

          neutral: "#0FCFEC"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
