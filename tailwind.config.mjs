/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#1a2332",
          950: "#0d1520",
        },
        accent: {
          DEFAULT: "#38bdf8",
          dark: "#0ea5e9",
          light: "#7dd3fc",
        },
      },
      fontFamily: {
        heading: ['"DM Serif Display"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
