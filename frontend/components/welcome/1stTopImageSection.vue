<template>
  <v-row justify="center">
    <v-col cols="12">
      <div :class="_isPC ? 'boxPC' : 'boxSP'">
        <video
          :src="require('@/assets/topMovie.mp4')"
          loop
          autoplay
          muted
          gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
        ></video>
        <img
          :class="_isPC ? 'logo_PC' : 'logo_SP'"
          :src="require('@/assets/logo_main.png')"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>
<style lang="scss">
.boxPC {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.boxSP {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50vh;
}
video {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.logo_PC {
  height: 124px;
  width: 389px;
  position: absolute;
  bottom: 5%;
  left: 2%;
}
.logo_SP {
  height: 70px;
  width: 220px;
  position: absolute;
  bottom: 2%;
  left: 2%;
}
</style>
