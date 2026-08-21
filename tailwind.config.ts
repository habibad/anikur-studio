import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kontour-black": "#100101",
        "kontour-black-deep": "#090101",
        "signal-red": "#EE0000",
        "kontour-orange": "#FF5100",
        "soft-white": "#FFF7F7",
        "studio-gray": "#BABABA",
        "card-surface": "rgba(18, 5, 5, 0.75)",
        "card-surface-light": "rgba(30, 10, 10, 0.85)",
        "border-hair": "rgba(255, 255, 255, 0.1)",
        "border-hair-subtle": "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      letterSpacing: {
        "headline-tight": "-0.04em",
        "headline-tighter": "-0.05em",
        "nav-wide": "0.2em",
      },
      transitionTimingFunction: {
        kontour: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "glow-shift": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)", opacity: "0.6" },
          "50%": { transform: "translate(4%, -4%) scale(1.1)", opacity: "0.85" },
        },
        "glow-shift-slow": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)", opacity: "0.45" },
          "50%": { transform: "translate(-6%, 5%) scale(1.15)", opacity: "0.75" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "glow-shift": "glow-shift 10s ease-in-out infinite",
        "glow-shift-slow": "glow-shift-slow 14s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
