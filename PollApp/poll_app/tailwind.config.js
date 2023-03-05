/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#171923',
        'midnight-light': '#0042da',
        'midnight-md': '#2D3748'

      },
      backgroundImage: {
        'blurry': "url('/bbblurry.svg')",
        'blurry-sm': "url('/bbblurry_sm.svg')",
        'blurry-2': "url('/bbblurry_two.svg')"
      }
    },
    
  },
  plugins: [],
}