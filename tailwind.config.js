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
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      background: "var(--background)",
      pink: "var(--pink)",
      orange: "#eab308",
      green: "#13ce66",
      gray: "var(--gray)",
    },
  },
};
