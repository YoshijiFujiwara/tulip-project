<template>
  <a-scene>
    <!-- Asset Management System -->
    <!-- DOWNLOAD, PRELOAD YOUR VIDEO, AND UPDATE ITS ID AND FILE NAME -->
    <a-assets>
      <img id="play" src="/vr/img/play.png" />
      <img id="pause" src="/vr/img/pause.png" />
      <video id="sample_movie" src="/vr/movie/sample1.mp4" loop="true"></video>
    </a-assets>

    <!-- Camera -->
    <a-camera>
      <a-cursor></a-cursor>
    </a-camera>

    <!-- Video 16:9 -->
    <!-- UPDATE YOUR VIDEO'S ID -->
    <a-video src="#sample_movie" width="8" height="4.5" position="0 3 -9">
      <!-- Play/Pause -->
      <a-image
        id="videoControls"
        src="#play"
        position="0 -3 0"
        scale="0.5 0.5 1"
        play-pause
      >
      </a-image>
    </a-video>
  </a-scene>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Index extends Vue {
  mounted() {
    window.AFRAME.registerComponent('play-pause', {
      init() {
        const myVideo = document.querySelector('#sample_movie')
        const videoControls = document.querySelector('#videoControls')
        this.el.addEventListener('click', function () {
          if (myVideo.paused) {
            myVideo.play()
            videoControls.setAttribute('src', '#pause')
          } else {
            myVideo.pause()
            videoControls.setAttribute('src', '#play')
          }
        })
      },
    })
  }
}
</script>
