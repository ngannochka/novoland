// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  ui: { colorMode: false },
  nitro: {
    preset: 'bun'
  },
  // content: {
  //   preview: {
  //     api: 'https://api.nuxt.studio' // подключение к Studio API
  //   }
  // }
})
