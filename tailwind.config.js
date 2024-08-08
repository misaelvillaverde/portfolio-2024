import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          border: "oklch(var(--card-border) / <alpha-value>)",
        },
        title: "oklch(var(--title) / <alpha-value>)",
        subtitle: "oklch(var(--subtitle) / <alpha-value>)",
        hampao: "oklch(var(--hampao) / <alpha-value>)",
        prevjob: "oklch(var(--prev-job) / <alpha-value>)",
        badge: {
          DEFAULT: "oklch(var(--badge) / <alpha-value>)",
          foreground: "oklch(var(--badge-foreground) / <alpha-value>)",
        },
        timeline: "oklch(var(--timeline) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
