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

export default Vue.extend({
  data() {
    return {
      token: '',
    }
  },
  methods: {
    openCreateExhibitsModal() {
      // 作品登録用モーダルを開く処理を書く
    },
  },
})
</script>
