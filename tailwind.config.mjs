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
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'], 
      },
    },
    plugins: [],
  };
  