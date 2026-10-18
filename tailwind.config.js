/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071324',
          900: '#0B1F3A', // Primary Background
          850: '#0F2544',
          800: '#13294B', // Dark Navy Blue
          750: '#17335C',
          700: '#1B3D6D', // Card / Section Contrast
          600: '#234C82',
        },
        gold: {
          300: '#F5DC86',
          400: '#ECC656',
          500: '#C9A227', // Rich Gold accent
          600: '#B08C1E',
          700: '#917114',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EBE5D8',
          300: '#DFD7C4',
        }
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        nastaliq: ['"Noto Nastaliq Urdu"', '"Amiri"', 'serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 20%, rgba(201, 162, 39, 0.15) 0%, transparent 60%)',
        'subtle-pattern': "radial-gradient(rgba(201, 162, 39, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 162, 39, 0.35)',
        'gold-glow-lg': '0 0 40px -5px rgba(201, 162, 39, 0.5)',
      }
    },
  },
  plugins: [],
}
