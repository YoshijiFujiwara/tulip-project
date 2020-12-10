<template>
  <v-app dark>
    <v-app-bar fixed app elevation="0" height="80">
      <v-img
        :src="require('@/assets/logo_main.png')"
        max-height="150"
        max-width="250"
      />
      <v-spacer />
      <v-btn @click="logout"> ログアウト(仮) </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  async logout() {
    await this.$auth.logout()
    this.$toast.success('ログアウトしました')
  }
}
</script>
<style lang="scss">
// 色情報 from https://tulipgumi.slack.com/archives/C01D34DJC5P/p1604650600001100
// それをrgbaに変換してます
</style>
