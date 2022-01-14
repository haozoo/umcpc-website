module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'club-blue': {
          100: '#EBF1F9',
          200: '#B7CFEB',
          300: '#83ACDC',
          400: '#4F89CE',
          500: '#2F66A7',
          600: '#1F446F',
          700: '#173353',
          800: '#0F2237',
          900: '#08111B',
        },
        'club-green': '#81EC4E',
        'club-orange': '#FFBD54',
      },
    },
  },
  plugins: [],
}
