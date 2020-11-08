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

    <!-- vuexの情報の表示 -->
    {{ localData }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import Sampleyade from '@/components/Sampleyade.vue'
const pathfinder = namespace('pathfinder')

@Component({
  auth: false,
  components: {
    Sampleyade,
  },
})
export default class Sample extends Vue {
  message = 'メッセージやで'
  responseData = null

  // vuexのサンプル用
  public localData: object = {}

  // vuexのステート
  @pathfinder.State
  public info!: object

  // vuexのゲッター
  @pathfinder.Getter
  public fullInfo!: string

  // vuexのmutation
  @pathfinder.Mutation
  public updateInfo!: (data: object) => void

  mounted() {
    this.localData = { ...this.localData, ...this.info }
  }

  public update(): void {
    this.updateInfo(this.localData)
  }

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
