import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#5c5c5c",
          faint: "#8a8a8a",
        },
        bronze: "#9a7348",
        paper: "#f6f6f5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        lexend: ["var(--font-lexend-exa)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
