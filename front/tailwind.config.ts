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
        "ocean-basic": "#129cb8",
        "ocean-dark": "#0E7489",
        "ocean-light": "#22d3ee",
        "ocean-very-light": "#cffafe",
        "black-basic": "#151515",
        "gray-basic": "#333333",
        "gray-light": "#eeeeec",
        "gray-very-light": "#f5f5f4",
        "white-basic": "#f8f8f8",
        "pink-basic": "#e62a65",
        "pink-light": "#fad1de",
      },
    },
  },
  plugins: [],
};
export default config;
