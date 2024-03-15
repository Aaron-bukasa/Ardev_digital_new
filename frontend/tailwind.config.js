/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        grayColor: '#484873',
        graySecond: '#e6e6e6',
        grayOpacity: '#48487394',
        redColor: '#e76f51',
        yellowColor: '#d9a703',
      },
      fontFamily: {
        'lora': 'Lora, serif',
        'roboto': 'Roboto, sans-serif'
      },
      content: {
        'linkAfter': 'url("./src/assets/img/expand_more.svg")',
      },
      backgroundImage: {
        // 'bgSVG001': "url('./src/assets/img/bgSVG001.svg')",
      }
    },
  },
  plugins: [],
}