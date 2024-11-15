// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: { port: 8000 },
  plugins: [
    '~/plugins/vue-countdown.js'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/avif',
          href: '/favicon.avif'
        },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&&family=Great+Vibes&family=Moderustic:wght@300..800&family=Parisienne&family=Parisienne&display=swap'
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/styles/main.scss', '~/assets/styles/tailwind.css'],
})
