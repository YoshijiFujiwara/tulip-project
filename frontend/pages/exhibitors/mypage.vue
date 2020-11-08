<template>
  <div>
    <h3>MyPage</h3>
    <p>トークン確認用: {{ token }}</p>
    <v-btn @click="openCreateExhibitsModal"
      >作品登録用モーダルを開く仮のボタン</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MyPage extends Vue {
  token = ''

  openCreateExhibitsModal() {
    // 作品登録用モーダルを開く
  }
}
</script>
