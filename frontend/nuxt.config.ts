import colors from 'vuetify/es5/util/colors'

import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Auth } from 'nuxtjs__auth'

// ここのひとかたまりを追加
declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
    $axios: NuxtAxiosInstance
  }
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - frontend',
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: 'https://aframe.io/releases/1.0.4/aframe.min.js',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // AuthModuleの設定
  auth: {
    redirect: {
      login: '/auth/signin',
      logout: '/auth/signin',
      callback: false,
      home: '/exhibitors/mypage',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/sign_in',
            method: 'post',
            propertyName: false,
          },
          logout: false,
          user: false,
        },
      },
    },
  },

  router: {
    middleware: ['auth'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.AXIOS_BASE_URL,
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // hot reload
  watchers: {
    webpack: {
      poll: true,
    },
  },
}
