import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nicomelendez.dev',
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
    ssr: {
      noExternal: ['path-to-regexp', '@midudev/tailwind-animations'],
    },
  },
})
