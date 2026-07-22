/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        brand: {
          cyan: "#00e5ff",
          purple: "#7c3aed",
          pink: "#ec4899",
          green: "#10b981",
          amber: "#f59e0b",
        },
        dark: {
          bg: "#05070f",
          bg2: "#0c0f1e",
          bg3: "#111528",
          card: "#141829",
          card2: "#1a1f35",
          border: "rgba(255,255,255,0.07)",
          border2: "rgba(255,255,255,0.12)",
        },
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease infinite",
        "fade-up": "fadeUp 0.6s ease both",
        "slide-in": "slideIn 0.3s ease both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,30px)" },
        },
        pulseDot: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: 0, transform: "translateX(-10px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      backdropBlur: { xs: "4px" },
    },
  },
  plugins: [],
};
