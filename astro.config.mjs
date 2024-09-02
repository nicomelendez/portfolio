import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { VitePWA } from "vite-plugin-pwa";
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
    build: {
      cssMinify: "lightningcss"
    },
    ssr: {
      noExternal: ["path-to-regexp"]
    },
    plugins: [VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globDirectory: "dist",
        globPatterns: ["**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null
      }
    })]
  }
});