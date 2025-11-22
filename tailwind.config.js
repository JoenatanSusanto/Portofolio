/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1E40AF',
        accent: '#EF4444',
        dark: '#1F2937',
        light: '#F9FAFB'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}