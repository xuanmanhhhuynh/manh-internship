import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,njk,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-4": "rgba(250,248,247)",
      },
    },
  },
  plugins: [],
};
export default config;
