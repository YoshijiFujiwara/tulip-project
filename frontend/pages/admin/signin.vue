<template>
  <v-row class="signin" align="center" justify="center">
    <v-container>
      <v-img
        max-width="600"
        class="mx-auto"
        :src="require('@/assets/logo_main.png')"
      />
      <v-row>
        <v-col class="mx-auto" cols="7">
          <v-row justify="center" class="row-wrap" no-gutters>
            <v-col cols="8" class="top" align="center">
              <v-form
                ref="form"
                v-model="valid"
                class="py-10"
                @submit.prevent="onSubmit"
              >
                <v-text-field
                  v-model="form.username"
                  :rules="rules.username"
                  background-color="rgba(255, 255, 255, 1)"
                  label="ユーザー名"
                  outlined
                  required
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="form.password"
                  :rules="rules.password"
                  background-color="rgba(255, 255, 255, 1)"
                  label="パスワード"
                  :type="showPasswordIcon ? 'text' : 'password'"
                  outlined
                  required
                  dense
                  :append-icon="showPasswordIcon ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPasswordIcon = !showPasswordIcon"
                ></v-text-field>
                <v-btn
                  id="signin-button"
                  type="submit"
                  block
                  x-large
                  color="rgba(119, 105, 209, 1)"
                  :disabled="!valid"
                  class="white--text"
                  >管理者ログイン</v-btn
                >
                <v-btn
                  id="button"
                  type="bottun"
                  elevation="0"
                  dark
                  color="rgba(163, 163, 163, 1)"
                  class="mt-10"
                >
                  パスワードを忘れた場合
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'exibitors/guest',
  auth: 'guest',
})
export default class Signin extends Vue {
  valid = false
  form = {
    username: '',
    password: '',
  }

  rules = {
    username: [(v: string) => !!v || 'ユーザ名は必須です。'],
    password: [(v: string) => !!v || 'パスワードは必須です。'],
  }

  showPasswordIcon = false

  onSubmit() {
    alert('lognin')
  }
}
</script>
<style lang="scss">
// 色情報 from https://tulipgumi.slack.com/archives/C01D34DJC5P/p1604650600001100
// それをrgbaに変換してます
.signin {
  background-color: #ebebeb;
  height: 100vh;
}
</style>
