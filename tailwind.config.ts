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
    },
  },
  plugins: [],
}

export default config
