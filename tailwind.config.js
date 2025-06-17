/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f7421e',
          light: '#ff6347',
          dark: '#c73518',
        },
        secondary: {
          DEFAULT: '#333333',
          light: '#4a4a4a',
          dark: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#f9c349',
          light: '#ffd166',
          dark: '#e6a518',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};