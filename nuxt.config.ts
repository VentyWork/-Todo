// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  imports: { dirs: ['composables'] },
  css: ['~/assets/scss/index.scss'],

  modules: [
    '@nuxt/scripts',
    '@hypernym/nuxt-gsap',
    'nuxt-viewport'
  ],

  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      noscript: [
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NUXT_PUBLIC_GTAG_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },

    json: {
      stringify: true,
    },
    build: {
      cssMinify: "lightningcss",
      ssrManifest: true,
      minify: "terser",
    },
  },

  nitro: {
    minify: true,
    compressPublicAssets: {
      brotli: true,
    },
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    },
  },

  components: [
    {
      global: false,
      path: '~/components',
      pathPrefix: false,
    },
  ],

  viewport: {
    breakpoints: {
      mobile: 375,
      tablet: 768,
      netbook: 1024,
      desktop: 1440,
      desktopFull: 1920,
      desktop2k: 2560,
    },
  },
})

