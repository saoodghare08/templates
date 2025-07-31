const { heroui } = require("@heroui/theme");
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(card|tabs|ripple).js",
  ],
  theme: {
    extend: {
      scrollSnapType: {
        mandatory: "mandatory",
      },
      scrollSnapAlign: {
        start: "start",
      },
      colors: {
        border: "#E6E6E6",
        background: {
          light: "#FAF9F7",
          dark: "#121212",
        },
        accent: {
          light: "#D3A17E",
          dark: "#EACDA3",
          DEFAULT: "#D3A17E",
        },
        text: {
          primary: "#1C1C1E",
          secondary: "#6E6E73",
        },
      },
    },
  },
  plugins: [heroui()],
};
