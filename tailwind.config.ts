import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": {opacity: '1',
          visibility: "visible"
        }
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": {opacity: '0',
          visibility: "invisible"
        }
        },
        OpenDrawer: {
"0%": {transform: "translateX(75vw)"},
"100%": {transform: "translateX(0px)"}
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
      },
    animation: {
      wiggle: "wiggle 200ms ease-in-out",
      fadeIn: "fadeIn 200ms ease-in-out forwards",
      fadeOut: "fadeOut 200ms ease-in-out forwards",
      OpenDrawer: "OpenDrawer 600ms ease-in-out forwards"
    }


      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
