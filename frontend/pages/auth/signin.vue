<template>
  <v-form ref="form">
    <v-text-field
      class="mt-10"
      label="学籍番号"
      outlined
      required
    ></v-text-field>
    <v-text-field
      class="mt-7"
      label="パスワード"
      outlined
      required
    ></v-text-field>
    <v-btn block large color="primary" @click="onSubmit">ログイン</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'exibitors/guest',
  methods: {
    onSubmit() {
      alert('aaaaaaaaaa')
    },
  },
})
</script>
