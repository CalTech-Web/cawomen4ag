import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cwa: {
          purple: "#4F376C",
          green: "#5B7B41",
          gold: "#FFC000",
          blue: "#6EC1E4",
          dark: "#243032",
        },
      },
      fontFamily: {
        spartan: ["var(--font-league-spartan)", "sans-serif"],
        sans: ["var(--font-source-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
