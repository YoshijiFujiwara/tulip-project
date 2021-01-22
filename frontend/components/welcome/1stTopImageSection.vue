<template>
  <v-row class justify="center">
    <div class="box">
      <v-img
        :lazy-src="require('@/assets/topImage.png')"
        max-height="720"
        gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
        :src="require('@/assets/topImage.png')"
      ></v-img>
      <img class="logo" :src="require('@/assets/logo_main.png')" />
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>
<style lang="scss">
.box {
  position: relative;
}
.logo {
  height: 124px;
  width: 389px;
  position: absolute;
  bottom: 0%;
  left: 13%;
}
</style>
