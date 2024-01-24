import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: 'hsl(219, 43%, 16%)',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        
        success:{
          
        }
      },
      content:{
        'pattern': "url('/pattern-curved-line-1.svg')",
        'pattern2': "url('/pattern-curved-line-2.svg')"
      },
      rotate: {
        '14': '140deg',
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
