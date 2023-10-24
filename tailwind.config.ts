import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./emails/**/*.{js,ts,jsx,tsx,mdx}",
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
        "base-theme": "#67748E",
        gray: {
          200: "#47748E",
          300: "#F6F6F6",
          400: "#F4F4F4",
          800: "#FCFCFC",
          light: "#818181",
        },

        line: "#DEDEDE",
      },
      screens: {
        xs: "460px",
        xxs: "320px",
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
      },

      backgroundImage: {
        "hero-image": "url('/images/e96e5841821e79f985088d21e301bed7.jpeg')",
      },
    },
  },

  plugins: [],
};
export default config;
