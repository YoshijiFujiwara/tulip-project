<template>
  <v-form ref="form">
    <v-text-field
      v-model="form.studentNumber"
      class="mt-10"
      label="学籍番号"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="form.password"
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
  data() {
    return {
      form: {
        studentNumber: '',
        password: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      await this.$auth
        .loginWith('local', {
          data: this.form,
        })
        .then(
          (response) => {
            return response
          },
          (error) => {
            return error
          }
        )
    },
  },
})
</script>
