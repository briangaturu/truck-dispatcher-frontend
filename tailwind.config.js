/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8",
          dark: "#1e3a8a",
          light: "#3b82f6",
        },
        accent: "#0ea5e9",
        success: "#16a34a",
        warning: "#ea580c",
        danger: "#dc2626",
        purple: "#9333ea",
        sidenav: {
          bg: "#0f172a",
          text: "#94a3b8",
          "active-bg": "#1d4ed8",
          "active-text": "#ffffff",
          "hover-bg": "#1e293b",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        navbar: "68px",
      },
      borderRadius: {
        DEFAULT: "10px",
        lg: "16px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
        md: "0 4px 16px rgba(0,0,0,0.10)",
        lg: "0 10px 40px rgba(0,0,0,0.14)",
      },
      width: {
        sidenav: "240px",
      },
      backgroundColor: {
        dash: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
