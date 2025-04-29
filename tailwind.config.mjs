import { keyframes } from 'framer-motion';

/**@type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        animation: {
          'float-around': 'floatAround 30s ease-in-out infinite',
          'fade-in': 'fadeIn 0.5s ease-out forwards',
          'slide-up': 'slideUp 0.5s ease-out forwards',
          'scale-in': 'scaleIn 0.5s ease-out forwards',
        },
        keyframes: {
          floatAround: {
            '0%': { 
              transform: 'translate(0, 0) scale(1)'
            },
            '25%': { 
              transform: 'translate(5%, 10%) scale(1.05)'
            },
            '50%': { 
              transform: 'translate(-5%, 5%) scale(0.95)'
            },
            '75%': { 
              transform: 'translate(-10%, -5%) scale(1.02)'
            },
            '100%': { 
              transform: 'translate(0, 0) scale(1)'
            }
          },
          fadeIn: {
            '0%': {
              opacity: '0',
            },
            '100%': {
              opacity: '1',
            },
          },
          slideUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          scaleIn: {
            '0%': {
              opacity: '0',
              transform: 'scale(0.9)',
            },
            '100%': {
              opacity: '1',
              transform: 'scale(1)',
            },
          },
        },
        screens: {
          xs: "414px", // iPhone XR/Pro starts here
          sm: "640px",
          md: "768px", // iPad Mini portrait
          lg: "1024px", // iPad Pro portrait
          xl: "1280px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ['var(--font-inter)'],
      },
    plugins: [],
    }
  };
  