/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
                     sans: ['"Open Sans"', 'sans-serif'], // Add Open Sans to the default sans family
                   },
    },
  },
  plugins: [],
}