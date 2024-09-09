/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        1: "0px 10px 50px -5px rgba(124, 58, 237, .5)",
        2: "0px -10px 50px -5px rgba(234, 179, 8, .5)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#F8F9FA",
      secondary: "#7C3AED",
      background: "#0B0216",
      pink: "#ff49db",
      orange: "#eab308",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
};
