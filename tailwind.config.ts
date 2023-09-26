import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xs: "0.85rem",
      base: "1rem",
      sm: "1.33rem",
      md: "1.77rem",
      lg: "2.37rem",
      xl: "3.16rem",
      "2xl": "4.21rem",
    },
    extend: {
      colors: {
        primary: "#2A9EDF",
        secondary: "#535353",
      },
      screens: {
        xs: "460px",
        xxs: "320px",
      },
    },
  },

  plugins: [],
};
export default config;
