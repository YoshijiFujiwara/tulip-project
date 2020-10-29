<template>
  <div>
    <h1>サンプルページです</h1>
    <p>{{ message }}</p>
    <h2>レスポンスメッセージ: {{ responseData }}</h2>
    <v-btn @click="onClickButton">サンプルリクエスト送信</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: 'メッセージやで',
      responseData: null,
    }
  },
  methods: {
    async onClickButton() {
      // nestjsに最初からあるサンプルAPI叩く
      // リクエストに必要なbaseUrlは、nuxt.configに定義してある
      const response = await this.$axios.get('')
      console.log('response', response)
      console.log('response data', response.data)
      console.log('response status', response.status)

      if (response.status >= 200 && response.status < 300) {
        this.responseData = response.data
      }
    },
  },
})
</script>
