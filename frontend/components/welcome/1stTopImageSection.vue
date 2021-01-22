<template>
  <v-row justify="center">
    <div class="box">
      <video
        :src="require('@/assets/topMovie.mp4')"
        loop
        autoplay
        muted
        class="mask"
        style="clip-path: inset(0em 0em 10em 0em)"
        gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
        max-height="900px"
      ></video>
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
  bottom: 20%;
  left: 10%;
}
</style>
