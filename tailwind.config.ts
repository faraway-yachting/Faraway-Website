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
        mustard: '#D6AB61',
        blue: '#012A50',
        seagreen: '#81A1A8',
        green: '#03425080',
      },
      fontFamily: {
        'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        'playfair': ['var(--font-playfair-display)', 'serif'],
        'source-sans-pro': ['var(--font-source-sans-pro)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'dm-serif-display': ['var(--font-dm-serif-display)', 'serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        'great-vibes': ['var(--font-great-vibes)', 'cursive'],
        'oswald': ['var(--font-oswald)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
