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
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component
export default class YourComponent extends Vue {
  token = ''

  openCreateExhibitsModal() {
    // 作品登録用モーダルを開く
  }
}
</script>
