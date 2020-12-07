<template>
  <v-container fluid grid-list-lg light>
    <v-layout row wrap class="mt-6">
      <v-flex d-flex xs6 md5>
        <v-card color="#b7b7b7" dark width=300 height=300 hover>
          <v-card-title primary class="title justify-center" ><v-icon size=200>mdi-account-supervisor</v-icon></v-card-title>
          <v-card-text class="text-center text-h5">展示者情報</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 md5>
        <v-card color="#b7b7b7" dark width=300 height=300 hover>
          <v-card-title primary class="title justify-center"><v-icon size=200>mdi-clipboard-check-multiple-outline</v-icon></v-card-title>
          <v-card-text class="text-center text-h5">出席確認</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {}
</script>
<style lang="scss"></style>
