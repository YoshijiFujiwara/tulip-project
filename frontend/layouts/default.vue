<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-spacer />
      <v-btn @click="logout"> ログアウト(仮) </v-btn>
    </v-app-bar>
    <v-main id="main-wrapper">
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
#main-wrapper {
  background-color: #2c3350;
}
</style>
