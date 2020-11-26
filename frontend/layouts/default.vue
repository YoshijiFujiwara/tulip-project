<template>
  <v-app dark>
    <v-app-bar fixed app>
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
