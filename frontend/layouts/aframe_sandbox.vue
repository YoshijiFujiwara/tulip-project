<template>
  <v-app>
    <v-app-bar fixed app>
      <div class="d-flex flex-wrap">
        <v-btn v-for="n in 36" :key="n" :to="`/vr/sandbox/${n}`">
          {{ n }}
        </v-btn>
      </div>
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
