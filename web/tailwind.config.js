/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./front_end/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'],
    },
    extend: {
      colors: {
        // Wine-themed colors matching the existing design
        'wine-red': {
          DEFAULT: 'rgb(135, 14, 79)',
          light: 'rgb(173, 20, 87)',
          lighter: 'rgb(200, 50, 110)',
          dark: 'rgb(100, 10, 60)',
        },
        'wine-green': {
          DEFAULT: 'rgb(139, 195, 74)',
          light: 'rgb(165, 214, 110)',
          dark: 'rgb(100, 160, 50)',
        },
        'golden-yellow': {
          DEFAULT: 'rgb(251, 192, 45)',
          light: 'rgb(255, 210, 90)',
          dark: 'rgb(220, 160, 30)',
        },
        'wine-white': 'rgb(240, 240, 240)',
        'wine-black': 'rgba(0, 0, 0, 0.87)',
        'light-gray': 'rgb(200, 200, 200)',
      },
      fontSize: {
        'med-heading': '3rem',
        'by-the-numbers': '2.7rem',
      },
      fontWeight: {
        'by-the-numbers': '200',
      },
      spacing: {
        'container': '90%',
      },
      maxWidth: {
        'container': '1280px',
        'text-container': '650px',
      },
    },
    screens: {
      'sm': '601px',  // Tablet
      'md': '993px',  // Desktop
      'lg': '1201px', // Large Desktop
    },
  },
  plugins: [],
}
