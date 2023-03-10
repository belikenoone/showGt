/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#E83151',
        secondary:'#387780',
        smokey:'#0F0A0A',
        whitish:'#F5EFED',
        blackish:'#02020B',
      },
      keyframes:{
        sliding:{
          '0%':{transform:'translateX(0)'}
        },
        '100%':{transform:'translateX(calc(-200%))'} 
      },
      animation:{
        'sliding':'sliding 10s linear infinite '
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
