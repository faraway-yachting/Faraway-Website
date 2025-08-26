import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zink: '#034250',
        mustard: 'linear-gradient(to right, #FF512F 0%, #F09819 51%, #FF512F 100%)',
        blue: '#012A50',
        seagreen: '#81A1A8',
        green: '#03425080',
      },
      fontFamily: {
        'dm-serif': ['var(--font-dm-serif-display)', 'serif'],
        'dm-serif-display': ['var(--font-dm-serif-display)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
