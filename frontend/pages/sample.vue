<template>
  <div>
    <h1>サンプルページです</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { format } from 'date-fns'

export default Vue.extend({
  data() {
    return {
      message: 'メッセージやで',
    }
  },
  created() {
    // ライブラリ追加テスト用
    console.log(format(new Date(2017, 6, 6), 'MM/DD/YYYY'));
  }
})
</script>
