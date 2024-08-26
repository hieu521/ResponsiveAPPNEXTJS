import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "100px", 
      xss:"200px",
      xs: "360px",
      md: "800px",
      smd: "1000px", 
      lg: "1023px",
      xl: "1680px",
    },
    extend: {
      colors: {
        white: "#fff",
        lightgray: "#d7d7d7",
        maroon: "rgba(121, 0, 0, 0.55)",
        black: "#000",
        rosybrown: "#c3a7a7",
        gray: {
          "100": "rgba(0, 0, 0, 0.7)",
          "200": "rgba(255, 255, 255, 0.4)",
        },
        gold: "#ffdd40",
        red: "#ff0000",
      },
      fontFamily: {
        "palanquin-dark": "'Palanquin Dark', sans-serif",
        "pathway-gothic-one": "'Pathway Gothic One', sans-serif",
      },
      boxShadow: {
        "custom-text": "4px 4px 0 rgba(0, 0, 0, 1)",   // Thêm bóng đổ đen rõ nét
      },
    },
  },
  plugins: [],
};
export default config;
