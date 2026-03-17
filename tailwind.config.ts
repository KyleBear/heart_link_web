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
        heart: {
          50: "#fef2f2",
          100: "#fce7e7",
          200: "#f9d0d2",
          300: "#f4a9ad",
          400: "#ec7a82",
          500: "#e04d5a",
          600: "#cc2f3e",
          700: "#ac2432",
          800: "#8f212d",
          900: "#79202a",
          950: "#420c12",
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#ffcbd1",
          300: "#ffa1ab",
          400: "#ff6b7a",
          500: "#f83b4c",
          600: "#e51c2e",
          700: "#c11424",
          800: "#a01422",
          900: "#841824",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-heart":
          "linear-gradient(135deg, #fef2f2 0%, #fce7e7 25%, #f9d0d2 50%, #f4a9ad 75%, #ec7a82 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(236, 122, 130, 0.25), transparent), linear-gradient(180deg, #fff 0%, #fef2f2 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #e04d5a 0%, #cc2f3e 50%, #ac2432 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
