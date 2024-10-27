import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/elements/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '570px',
      md: '768px',
      lg: '768px',
      xl: '1280px',
      '2xl': '1280px',
    },
    container: {
      center:true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'p-gray':"#7A7A7A"
      },
       fontFamily: {
        'sf-pro-display-normal': ['SFProDisplayNormal', 'sans-serif'],
        'sf-pro-display-medium': ['SFProDisplayMedium', 'sans-serif'],
        'sf-pro-display-bold': ['SFProDisplayBold', 'sans-serif']
      },
       boxShadow: {
        'button-shadow': '0px 2.17px 5.79px 0px #0000003D',
        'header-shadow': '0px 2.4px 12px 0px #0000001A'
      

      }
    },
  },
  plugins: [],
};
export default config;
