/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        blackText: '#1f1f1f',
        yellowText: '#f6af03',
        blackBlackGround: '#011c2b',
        footerBG: '#011c2a',
        pageBG: '#FBFBFB',
        subBG: '#011621',
        subBtn: '#000e15',
        grayText: '#717171',
      },
    },
  },
  plugins: [],
}

