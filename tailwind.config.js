/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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