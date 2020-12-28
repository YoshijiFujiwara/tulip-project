import path from 'path'
import fs from 'fs'
import colors from 'vuetify/es5/util/colors'

import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Toasted } from 'vue-toasted'
import { Auth } from 'nuxtjs__auth'

// ここのひとかたまりを追加
declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
    $axios: NuxtAxiosInstance
    $toast: Toasted
  }
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // [FYI] https://typescript.nuxtjs.org/guide/lint/#runtime-lint
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },

  // 環境変数
  env: {
    cloudinaryUploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    axiosBaseUrl: process.env.AXIOS_BASE_URL,
    vrBaseUrl: process.env.VR_BASE_URL,
  },

  // server proxy setting ()
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
    },
  },

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
      {
        src:
          'https://unpkg.com/aframe-event-set-component@5.0.0/dist/aframe-event-set-component.min.js',
      },
      {
        src: 'https://unpkg.com/super-hands@3.0.0/dist/super-hands.min.js',
      },
      {
        src: '/js/progressive-controls.js',
      },
      {
        src:
          'https://cdn.jsdelivr.net/gh/n5ro/aframe-physics-system@v4.0.1/dist/aframe-physics-system.min.js',
      },
      {
        scr:
          'https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js',
      },
      {
        src:
          'https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js',
      },
      {
        src:
          'https://recast-api.donmccurdy.com/aframe-inspector-plugin-recast.js',
      },
      {
        src:
          'https://rawgit.com/fernandojsg/aframe-teleport-controls/master/dist/aframe-teleport-controls.min.js',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/axios/index', '@/plugins/aframe'],

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
    '@nuxtjs/toast',
  ],

  // トースト通知設定
  toast: {
    position: 'top-center',
    register: [
      // ここにカスタム通知をセットする
      {
        name: 'error',
        message: 'エラーが発生しました。時間をおいて、再度お試しください',
        options: {
          type: 'error',
        },
      },
    ],
  },

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
          user: { url: '/auth/me', method: 'get', propertyName: false },
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
  // FIXME: plugins/axiosディレクトリとの設定の整理が必要そうかな
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

          mainText: '#6f6f6f', // メインテキストカラー

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
