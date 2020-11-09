<template>
  <div>
    <h3>MyPage</h3>
    <p>ログインユーザー確認用: {{ user }}</p>
    <v-btn @click="openCreateExhibitsModal"
      >作品登録用モーダルを開く仮のボタン</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MyPage extends Vue {
  user: object = null

  openCreateExhibitsModal() {
    // 作品登録用モーダルを開く
  }

  async created() {
    this.user = await this.$auth.user
  }
}
</script>
