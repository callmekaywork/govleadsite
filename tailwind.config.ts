// tailwind.config.js
module.exports = {
  darkMode: "class", // enables dark mode via `class="dark"`
  theme: {
    extend: {
      colors: {
        brandBlue: {
          light: "#1E3A8A", // Deep navy blue
          dark: "#60A5FA", // Bright sky blue
        },
        brandOrange: {
          light: "#F59E0B", // Light amber orange
          dark: "#FDBA74", // Soft peach orange
        },
        brandBackground: {
          light: "#FFFFFF", // Pure white
          dark: "#0F172A", // Near-black slate
        },
        brandSurface: {
          light: "#F1F5F9", // Light gray-blue surface
          dark: "#1E293B", // Dark slate surface
        },
        brandTextPrimary: {
          light: "#0F172A", // Dark slate text
          dark: "#F8FAFC", // Off-white text
        },
        brandTextSecondary: {
          light: "#475569", // Muted gray-blue
          dark: "#CBD5E1", // Light gray-blue
        },
        brandBorder: {
          light: "#E2E8F0", // Soft gray
          dark: "#334155", // Dark gray-blue
        },
      },
      fontSize: {
        heading: "1.5rem",
        body: "1rem",
        caption: "0.875rem",
      },
      fontWeight: {
        heading: "700",
        body: "400",
        caption: "300",
      },
    },
  },
};
