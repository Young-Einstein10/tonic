import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gray: "var(--gray)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
    backgroundImage: {
      "mask-left": "linear-gradient(to left, rgba(0, 0, 0, 0), #fff)",
      "mask-right": "linear-gradient(to right, rgba(0, 0, 0, 0), #fff);",
    },
    animation: {
      "loop-scroll": "loop-scroll 50s linear infinite",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
  },
  plugins: [],
};
export default config;
