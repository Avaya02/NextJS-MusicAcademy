import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**.{js,ts,jsx,tsx}",
    "./src/components/**.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode : 'class',
  theme: {
    extend: {
      animation :{       //added from aceternity 
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {       //added from aceternity 
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

