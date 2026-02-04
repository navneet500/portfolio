/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(36 33% 97%)",
        foreground: "hsl(222 22% 18%)",
        card: "hsl(0 0% 100%)",
        muted: "hsl(228 11% 45%)",
        accent: "hsl(346 44% 66%)",
        accentStrong: "hsl(346 48% 52%)",
        roseWash: "hsl(346 36% 92%)",
        sand: "hsl(34 30% 90%)"
      },
      boxShadow: {
        glow: "0 20px 50px rgba(143, 83, 104, 0.18)"
      }
    }
  },
  plugins: []
};
