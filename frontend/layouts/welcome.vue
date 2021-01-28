<template>
  <v-app>
    <v-container
      class="pa-0 ma-0 wrapper welcomeMainText--text welcomeBackground"
      style="font-family: HiraginoSans-W4"
      fluid
    >
      <nuxt />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class WelcomeLayout extends Vue {}
</script>

<style lang="scss" scoped></style>
