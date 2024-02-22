import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
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
      xs: "0.875rem",
      base: "1rem",
      sm: "1.2rem",
      md: "1.44rem",
      lg: "1.728rem",
      xl: "2.074rem",
      "2xl": "2.488rem",
      "3xl": "2.986rem",
    },
    extend: {
      colors: {
        primary: "#2A9EDF",
        dark: "#15171E",
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
        xxm: "380px",
        xxs: "320px",
        xl: "1280px",
        "2xl": "1440px",
      },
      fontFamily: {
        sans: ["var(--font-nunito_sans)"],
      },

      backgroundImage: {
        "hero-image": "url('/images/e96e5841821e79f985088d21e301bed7.jpeg')",
        "billing-card": "url('/images/card_curve.jpg')",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
export default config;
