// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        // Light Theme Palette (Example - Adjust as needed)
        primary: {
          light: "#64B5F6", // Lighter Blue
          DEFAULT: "#1976D2", // Main Blue (Material Design Blue 700)
          dark: "#0D47A1", // Darker Blue
        },
        secondary: {
          light: "#E0E0E0", // Light Gray
          DEFAULT: "#9E9E9E", // Medium Gray (Material Design Grey 500)
          dark: "#616161", // Darker Gray
        },
        accent: {
          red: "#D32F2F", // Emergency Red (Material Design Red 700)
          green: "#388E3C", // Success Green (Material Design Green 700)
          yellow: "#FBC02D", // Warning Yellow
        },
        background: {
          DEFAULT: "#FFFFFF",
          paper: "#F5F5F5",
        },
        text: {
          primary: "#212121", // Almost Black
          secondary: "#757575", // Medium Gray
          disabled: "#BDBDBD", // Light Gray
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Example: Using Inter font (add link in index.html)
        logo: ['"Your Logo Font Name"', "sans-serif"], // Replace with your actual logo font if needed
      },
    },
  },
  plugins: [],
};
