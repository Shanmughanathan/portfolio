import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E1A",
        "ink-2": "#0C1120",
        surface: "#111726",
        "surface-2": "#151C30",
        line: "#1E2740",
        "line-2": "#2A3556",
        signal: "#34D8C4",
        amber: "#F5B54A",
        brandblue: "#5B8DEF",
        hi: "#E9EDF7",
        mid: "#AEB7CE",
        lo: "#7C86A0",
      },
      fontFamily: {
        disp: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1180px" },
    },
  },
  plugins: [],
};
export default config;
