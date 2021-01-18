<template>
  <v-app>
    <v-container class="pa-0 wrapper" fluid>
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
