import animations from '@midudev/tailwind-animations'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary:'var(--color-tertiary)',
        fourth:'var(--color-fourth)'
      },
      screens: {
        xs: '360px',
        xlbig: '1450px',
        xlmax: '1700px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    animations,
    function ({ addVariant }) {
      addVariant('any-hover', '@media (any-hover: hover) { &:hover }')
    },
  ],
}
