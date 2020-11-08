<template>
  <div>
    <h1>サンプルページです</h1>
    <p>{{ message }}</p>
    <h2>レスポンスメッセージ: {{ responseData }}</h2>
    <v-btn @click="onClickButton">サンプルリクエスト送信</v-btn>

    <Sampleyade
      message="俺だよ俺"
      subtitle="ぴえん"
      subtitle2="ぱおん"
      subtitle3="悲しくて"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Sampleyade from '@/components/Sampleyade.vue'

@Component({
  auth: false,
  components: {
    Sampleyade,
  },
})
export default class Sample extends Vue {
  message = 'メッセージやで'
  responseData = null

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
  }
}
</script>
