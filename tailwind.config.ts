import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#A37E57',
        secondary: '#9DB6CC',
        danger: '#E52B50',
        'primary-100': '#E4D4C8',
        'primary-500': '#533440',
        'white-100': '#f8f9fd',
        'white-400': '#d8d8d8',
        black: '#0f0f0f',
      },
      borderRadius: {
        lg: '1rem',
        md: '0.6rem',
        sm: '0.3rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
