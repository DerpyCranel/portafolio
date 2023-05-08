/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}