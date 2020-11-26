<template>
  <!-- <v-parallax
    id="parallax-full-height"
    height="100%"
    :src="require('@/assets/signin_background.png')"
  > -->
    <v-container>
      <v-img :src="require('@/assets/logo_main.png')" />
      <v-row>
        <v-col class="mx-auto" cols="7">
          <div id="form-wrapper">
            <div id="title-wrapper" class="py-5">SIGN IN</div>
            <v-row align="center" justify="center" class="row-wrap" no-gutters>
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
                    background-color="rgba(255, 255, 255, 0.16)"
                    dark
                    prepend-inner-icon="mdi-account"
                    label="user name"
                    outlined
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    :rules="rules.password"
                    background-color="rgba(255, 255, 255, 0.16)"
                    dark
                    prepend-inner-icon="mdi-lock"
                    label="password"
                    :type="showPasswordIcon ? 'text' : 'password'"
                    outlined
                    required
                    :append-icon="showPasswordIcon ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPasswordIcon = !showPasswordIcon"
                  ></v-text-field>
                  <v-btn
                    id="signin-button"
                    type="submit"
                    block
                    large
                    dark
                    color="rgba(255, 255, 255, 0.23)"
                    :disabled="!valid"
                    >Log in</v-btn
                  >
                </v-form>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
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

  mounted() {
    // parallaxコンポーネントを無理やり、高さを合わせる（汚いやり方だけど、仕方ない）
    if (document.getElementById('parallax-full-height')) {
      document.getElementById('parallax-full-height')!.style.height = '100vh'
    }
  }

  async onSubmit() {
    alert('lognin')
  }
}
</script>
<style lang="scss">
// 色情報 from https://tulipgumi.slack.com/archives/C01D34DJC5P/p1604650600001100
// それをrgbaに変換してます
#form-wrapper {
  background-color: rgba(20, 8, 44, 0.59);
}
#title-wrapper {
  background-color: rgba(255, 255, 255, 0.18);
  font-family: MeiryoUI;
  font-size: 52px;
  font-weight: bold;
  line-height: 0.69;
  text-align: center;
  color: rgba(255, 255, 255, 0.76);
}
</style>
