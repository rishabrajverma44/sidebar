/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem', 
        'sm': '0.875rem',
       
      },
    },
  },
  plugins: [],
}

