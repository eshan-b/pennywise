import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {extend: {
    colors: {
      "light-violet": "#DA365F",
      "dark-violet": "#AD0731",
      "light-pink": "#FA4E79",
      "positive-green": "#15CA3D",
      "negative-red": "#E9013B",
    },
    spacing: {
      "1rem": "1rem",
      "2rem": "2rem",
      "3rem": "3rem",
      "4rem": "4rem",
      "5rem": "5rem",
    },
  },},
  plugins: [nextui()],
};
export default config;
