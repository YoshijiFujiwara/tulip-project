<template>
  <v-row justify="center">
    <v-img
      width="1800px"
      height="1024px"
      :src="src"
      gradient="to top, rgba(61, 31, 122, .8), rgba(0,0,0,.8)"
    >
      <v-container class="grey lighten-5">
        <v-img max-width="1114px" :src="require('@/assets/logo_main.png')" />
        <v-row justify="center" class="md-6" no-gutters>
          <v-col md="12" offset-md="4" align="center" class="title">
            <span class="title px-10">SIGN IN</span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="md-1" no-gutters>
          <v-col offset-md="4" md="12" class="top" align="center">
            <v-form ref="form" v-model="valid">
              <v-row justify="center" class="pa-10">
                <v-col cols="12">
                  <v-text-field
                    v-model="form.studentNumber"
                    background-color="#281252"
                    dark
                    class="mt-10"
                    label="学籍番号"
                    :rules="rules.studentNumber"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.password"
                    background-color="#281252"
                    dark
                    class="mt-7"
                    label="パスワード"
                    :type="showPasswordIcon ? 'text' : 'password'"
                    :rules="rules.password"
                    outlined
                    required
                    :append-icon="showPasswordIcon ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPasswordIcon = !showPasswordIcon"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    block
                    large
                    dark
                    color="#27144e"
                    class="signin-btn ma-5"
                    :disabled="!valid"
                    @click="onSubmit"
                    >Log in</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'exibitors/guest',
  data() {
    return {
      valid: false,
      form: {
        studentNumber: '',
        password: '',
      },
      rules: {
        studentNumber: [(v: string) => !!v || '学籍番号は必須です。'],
        password: [(v: string) => !!v || 'パスワードは必須です。'],
      },
      showPasswordIcon: false,
    }
  },
  methods: {
    onSubmit() {
      alert(
        'loooooooooooooooooooooooooooooooooooooooooogin\nマイページに飛びます。'
      )
      this.$router.push('/mypage/0')
    },
  },
})
</script>

<style>
.title {
  background-color: #5f439a;
  font-size: 3rem;
  color: #cbbee7;
}
.top {
  background-color: #14082c;
}
.signin-btn {
  border: solid 3px #5f439a;
}
</style>
