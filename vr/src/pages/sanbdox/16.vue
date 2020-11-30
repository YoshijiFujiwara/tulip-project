<template>
  <a-scene>
    <!-- Asset Management System -->
    <!-- DOWNLOAD, PRELOAD YOUR AUDIO FILES, AND UPDATE THEIR FILE NAMES IN THIS DOC -->
    <a-assets>
      <img id="ground" src="/vr/img/floor.jpg" />
      <audio id="sound_mozart1" src="/vr/music/mozart1.mp3"></audio>
      <audio id="sound_verdi" src="/vr/music/verdi.mp3"></audio>
      <img id="panorama" src="/vr/img/360-panorama.jpg" />
      <audio
        id="ambience_sound"
        src="/vr/music/japanese_nightingale_1.mp3"
      ></audio>
    </a-assets>

    <!-- Camera -->
    <a-entity position="0 0 7">
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-plane src="#ground" scale="40 40 1" repeat="2 2" rotation="-90 0 0">
    </a-plane>

    <!-- Blue Cylinder -->
    <a-cylinder
      color="#0088FF"
      height="5"
      position="-2 2.5 0"
      sound="src: #sound_mozart1;
        				   on: click;
        				   volume: 1;
        				   refDistance: 4;
        				   rolloffFactor: 4"
    >
      <a-entity
        sound="src: #sound_mozart1; autoplay: false"
        position="1.396 1.525 0"
      >
      </a-entity>
    </a-cylinder>

    <!-- Yellow Box with Play and Stop Controls -->
    <a-box
      id="yellow"
      color="#FFAA00"
      position="1.5 0.5 0.5"
      sound="src: #sound_verdi"
    >
      <!-- Play -->
      <a-sphere
        color="#00AA00"
        radius="0.25"
        position="-0.5 1 0"
        play
      ></a-sphere>
      <!-- Stop -->
      <a-sphere
        color="#AA0000"
        radius="0.25"
        position="0.5 1 0"
        stop
      ></a-sphere>
    </a-box>

    <!-- 360° Panorama -->
    <a-sky
      src="#panorama"
      sound="src: #ambience_sound; autoplay: true; loop: true; positional: false"
    >
    </a-sky>
  </a-scene>
</template>

<script>
export default {
  mounted() {
    window.AFRAME.registerComponent('play', {
      init() {
        const myEl = document.querySelector('#yellow')
        this.el.addEventListener('click', function () {
          myEl.components.sound.playSound()
        })
      }
    })
    window.AFRAME.registerComponent('stop', {
      init() {
        const myEl = document.querySelector('#yellow')
        this.el.addEventListener('click', function () {
          myEl.components.sound.stopSound()
        })
      }
    })
  }
}
</script>
