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
      login: '/auth/signin', // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/auth/signin', // ログアウト時のリダイレクトURL
      callback: false, // Oauth認証等で必要となる コールバックルート
      home: '/exhibitors/mypage', // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/sign_in',
            method: 'post',
            propertyName: 'accessToken',
          },
          logout: false,
          user: false,
        },
      },
    },
  },

  // ログインしていなかったら、強制的にログイン画面へリダイレクトする
  // ログインしていている状態でログイン画面にアクセスしようとするとホームへリダイレクトする
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
      dark: false,
      themes: {
        light: {
          // 基本の色
          primary: '#1996fe',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#F2135D',
          success: colors.green.accent3,

          // ログインページ関連
          color_signinFormHeader: 'rgba(255, 255, 255, 0.18)',
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
