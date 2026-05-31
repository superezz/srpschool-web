import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // siteConfig holds dynamic gradient classes (gallery tones) — must be scanned
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep cinematic navy base
        ink: {
          950: "#05070f",
          900: "#070b1a",
          800: "#0c1226",
          700: "#131b38",
          600: "#1d294f",
        },
        // Warm prestige gold accent
        gold: {
          200: "#fbe7b0",
          300: "#f7d27a",
          400: "#f2bd4d",
          500: "#e6a626",
          600: "#c8861a",
        },
        royal: {
          400: "#7c8cff",
          500: "#5b6cff",
          600: "#4453e6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(242, 189, 77, 0.45)",
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1.5%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
