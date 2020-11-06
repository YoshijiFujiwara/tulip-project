<template>
  <v-row justify="center">
    <v-img class="mx-auto" :src="require('@/assets/signin_background.png')">
      <v-container>
        <v-img :src="require('@/assets/logo_main.png')" />
        <v-row id="signin-wrap" class="row-wrap" no-gutters>
          <v-col cols="12" align="center" class="title">
            <span class="SIGN-IN">SIGN IN</span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="row-wrap" no-gutters>
          <v-col cols="12" class="top" align="center">
            <v-form ref="form">
              <v-col cols="8">
                <v-text-field
                  v-model="form.studentNumber"
                  background-color="#281252"
                  dark
                  prepend-inner-icon="mdi-account"
                  class="mt-10"
                  label="学籍番号"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  v-model="form.password"
                  prepend-inner-icon="mdi-lock"
                  background-color="#281252"
                  dark
                  label="パスワード"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="8">
                <v-btn
                  block
                  large
                  dark
                  color="#27144e"
                  class="signin-btn ma-5"
                  @click="onSubmit"
                  >Log in</v-btn
                >
              </v-col>
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
  auth: 'guest',
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

<style>
.title {
  background-color: rgba(255, 255, 255, 0.18);
  font-size: 3rem;
}
.row-wrap {
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(20, 8, 44, 0.59);
}
.top {
  background-color: #14082c;
}
.signin-btn {
  border: solid 3px rgba(255, 255, 255, 0.37);

  background-color: rgba(255, 255, 255, 0.23);
}
.SIGN-IN {
  width: 228px;

  height: 66px;

  font-family: MeiryoUI;

  font-size: 52px;

  font-weight: bold;

  font-stretch: normal;

  font-style: normal;

  line-height: 0.69;

  letter-spacing: normal;

  text-align: center;

  color: rgba(255, 255, 255, 0.76);
}
#signin-wrap {
  margin-top: 50px;
}
</style>
