<template>
  <div>
    <h3>MyPage</h3>
    <p>トークン確認用: {{ token }}</p>
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
})
</script>
