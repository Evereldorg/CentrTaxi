import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        DEFAULT: '1000px',
        1200: '1200px',
      },
      transitionDuration: {
        'snap': '800ms',
      },
      transitionTimingFunction: {
        'snap': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'snap-in': 'cubic-bezier(0.5, 0, 0.84, 0.25)',
        'snap-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};