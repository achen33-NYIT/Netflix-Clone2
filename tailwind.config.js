/** @type {import('tailwindcss').Config} */

// add customized styles here ex. colors and animations
module.exports = {
  // content: [],
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [],
};
