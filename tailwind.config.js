/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      screens: {
        'custom-md': '932px', // Define a custom breakpoint at 930px
      },
     
    
    },
  },
  plugins: [],
}