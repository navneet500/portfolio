/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(222 24% 6%)",
        foreground: "hsl(210 40% 98%)",
        card: "hsl(224 22% 8%)",
        muted: "hsl(215 20% 65%)",
        accent: "hsl(212 85% 65%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 179, 237, 0.15)"
      }
    }
  },
  plugins: []
};
