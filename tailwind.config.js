/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        purpleDeep: '#6B21A8',
        softText: '#E6E6F0',
        subText: '#A8A6B7',
        pageBg: '#0b0320'
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(124,58,237,0.12)',
        'neon': '0 0 12px rgba(124,58,237,0.18)'
      }
    }
  },
  plugins: [],
}
