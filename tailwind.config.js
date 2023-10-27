/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'vh-full': '100vh',
        'vh-1/2': '50vh',
        'vh-1/4': '25vh',
      },
      gridTemplateColumns: {
        '60/40': '60% 40%',
        '20/80': '20% 80%',
        '40/60': '30% 70%'
      },
      translate: {
        's0': '0%',
        's1': '100%',
        's2': '171%',
        's3': '260%',
        's4': '343%',
        's5': '430%'
      }
    },
  },
  plugins: [],
};