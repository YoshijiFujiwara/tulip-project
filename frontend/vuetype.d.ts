import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    _isSP: boolean
    _isPC: boolean
  }
}
