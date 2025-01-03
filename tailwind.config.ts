<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
=======
import type { Config } from "tailwindcss";

const config: Config = {
>>>>>>> c2ed1b144bf25c364b349f293bed1fc055f87cfe
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
<<<<<<< HEAD
      fontFamily: {
        Clash: ['Clash Display'],
=======
      fontFamily:{
        'Clash':['Clash Display' ],
>>>>>>> c2ed1b144bf25c364b349f293bed1fc055f87cfe
      },
    },
  },
  plugins: [],
};
<<<<<<< HEAD
=======
export default config;
>>>>>>> c2ed1b144bf25c364b349f293bed1fc055f87cfe
