import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9f0ff",
          200: "#b9e3ff",
          300: "#86d0ff",
          400: "#4bb7ff",
          500: "#2196ff",
          600: "#0b78e6",
          700: "#0b5fb8",
          800: "#0d4f93",
          900: "#0f427a",
        },
        ink: "#0b1220",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(2,6,23,.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
