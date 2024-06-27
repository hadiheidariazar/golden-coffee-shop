/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "dana": "Dana",
        "dana-medium": "Dana Medium",
        "dana-bold": "Dana DemiBold",
        "morabba": "Morabba Light",
        "morabba-medium": "Morabba Medium",
        "morabba-bold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      spacing: {
        "27": "6.25rem",
        "50": "12.5rem"
      },
      screens: {
        "xs": "480px",
        "ipad": "992px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "home-mobile": "url('/images/headerBgMobile.webp')",
        "home-desktop": "url('/images/headerBgDesktop.webp')",
        "shop-header": "url('/images/slides/3.jpg')",
        "blog-header": "url('/images/slides/2.jpg')"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", '& > *')
      addVariant("child-hover", '& > *:hover')
    }
  ],
}

