/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'eveil-olive': '#718C3F',
        'eveil-gold': '#EBC455',
        'eveil-sage': '#9EAD78',
        'eveil-mist': '#C9D2B8',
        'eveil-sky': '#F4FAFC',
      },
      fontFamily: {
        'radibta': ['Radibta', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
