// tailwind.config.js

// Import required modules
const colors = require('tailwindcss/colors');

// Define custom colors for reuse
const customColors = {
  teal: colors.teal,
  emerald: colors.emerald,
  violet: colors.violet,
};

// Tailwind CSS configuration
module.exports = {
  // Specify the files that Tailwind should scan for classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // Extend or customize the default Tailwind CSS theme
  theme: {
    extend: {
      // Add custom background images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // Add custom colors
      colors: customColors,

      // Add custom typography styles
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },

      // Add more theme customization options as needed
    },
  },

  // Add plugins for additional functionality
  plugins: [
    // Include any additional plugins here
  ],
};