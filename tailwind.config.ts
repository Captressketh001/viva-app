import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	extend: {
  		gridTemplateColumns: {
  			'13': 'repeat(13, minmax(0, 1fr))'
  		},
  		colors: {
  			blue: {
  				'400': 'hsl(219, 43%, 16%)',
  				'500': '#0070F3',
  				'600': '#2F6FEB'
  			},
  			grey: {
  				'400': 'hsl(30, 33%, 93%)'
  			},
  			violet: 'hsl(264, 100%, 69%)',
  			pink: 'hsl(292, 76%, 54%)',
  			orange: 'hsl(31, 100%, 65%)',
  			'beige-500': '#98908B',
  			'beige-100': '#F8F4F0',
  			'grey-900': '#201F24',
  			'grey-500': '#696868',
  			'grey-300': '#B3B3B3',
  			'grey-100': '#F2F2F2',
  			success: {}
  		},
  		content:{
			'pattern': "url('/pattern-curved-line-1.svg')",
			'pattern2': "url('/pattern-curved-line-2.svg')",
			'pattern3': "url('/pattern-curved-line-3.svg')",
		},
  		rotate: {
  			'14': '140deg'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	keyframes: {
  		shimmer: {
  			'100%': {
  				transform: 'translateX(100%)'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
