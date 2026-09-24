import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#070A08",
        surface: "#0E1310",
        "surface-2": "#121814",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(124,232,169,0.4)",
        accent: {
          DEFAULT: "#7CE8A9",
          strong: "#35C481",
          soft: "rgba(124,232,169,0.12)"
        },
        ink: "#ECF3EE",
        muted: "#8FA79B"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      maxWidth: {
        content: "1180px"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(124,232,169,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,232,169,0.06) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "56px 56px"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        blink: "blink 1s step-end infinite"
      }
    }
  },
  plugins: []
};

export default config;
