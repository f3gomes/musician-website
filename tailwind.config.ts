import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        default: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        singerOverlay: "url(/assets/hero/singer-overlay.png)",
        newsletter: "url(/assets/newsletter/bg.png)",
      },
      fontFamily: {
        alexBrush: ["var(--font-alexBrush)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#06062a",
        secondary: "#151538",
        tertiary: "#242445",
        accent: {
          default: "#7f1cfc",
          hover: "#6519c6",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
