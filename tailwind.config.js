/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   'marquee': 'marquee 15s linear infinite',
      // },
      // keyframes: {
      //   'marquee': {
      //     '0%': { transform: 'translateX(100%)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   }
      // },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [],
}
