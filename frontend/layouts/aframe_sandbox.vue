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
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AframeSandbox extends Vue {}
</script>
