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
          <v-col cols="12" align="center">
            <h1 dark>SIGN IN</h1>
          </v-col>
          <v-col cols="12" sm="6" md="8" lg="6" class="top" align="center">
            <v-form ref="form">
              <v-text-field
                background-color="#281252"
                dark
                class="mt-10"
                label="学籍番号"
                outlined
                required
              ></v-text-field>
              <v-text-field
                background-color="#281252"
                dark
                class="mt-7"
                label="パスワード"
                outlined
                required
              ></v-text-field>
              <v-btn
                block
                large
                dark
                color="#27144e"
                class="signin-btn"
                @click="onSubmit"
                >Log in</v-btn
              >
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
  methods: {
    onSubmit() {
      alert('aaaaaaaaaa')
    },
  },
})
</script>

<style>
h1 {
  background-color: #5f439a;
}
.top {
  background-color: #14082c;
}
.signin-btn {
  border: solid 3px #5f439a;
}
</style>
