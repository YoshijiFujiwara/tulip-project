<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
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
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'Vuetify.js',
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$toast.success('ログアウトしました')
    },
  },
})
</script>
