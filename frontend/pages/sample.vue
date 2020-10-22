<template>
  <div>
    <h1>サンプルページです</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: 'メッセージやで',
    }
  },
})
</script>
