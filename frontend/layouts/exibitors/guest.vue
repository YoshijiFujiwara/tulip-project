<template>
  <v-app>
    <v-main>
      <v-container class="pa-0 wrapper" fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Guest extends Vue {}
</script>
