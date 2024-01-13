/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f3f4f6",

          "secondary": "#00dfc8",

          "accent": "#f95a00",

          "neutral": "#070804",

          "base-100": "#111827",

          "info": "#0068e7",

          "success": "#00a452",

          "warning": "#ff8900",

          "error": "#ff868e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

