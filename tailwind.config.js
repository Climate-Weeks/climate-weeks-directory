/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Soft, neutral background
        'canvas': '#F9F9F7',
        // Dusty accent or pastel
        'accent': '#86B6A4', // example dusty cyan
        // Alternatively: 'accent': '#B5CBB7' for a pastel sage
      },
      boxShadow: {
        'subtle': '0 2px 5px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [
    // If you want line-clamp:
    // require('@tailwindcss/line-clamp'),
  ],
};
