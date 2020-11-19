<template>
  <a-scene>
    <!-- Asset Management System -->
    <a-assets>
      <img id="look-at-img" src="/vr/img/look_at.jpg" />
    </a-assets>

    <!-- Floor -->
    <a-plane color="#E7E7E7" shader="flat" rotation="-90 0 0" scale="6 18 1">
    </a-plane>

    <!-- Camera Rig -->
    <a-entity position="-4.5 0 0" rotation="0 -36 0">
      <!-- Camera -->
      <a-camera id="cam">
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Blue Box -->
    <a-box
      id="blue"
      color="#00AAFF"
      position="-1.5 0.5 -6"
      animation="property: position;
						  to: -1.5 0.5 6;
						  dir: alternate;
						  easing: linear;
						  loop: true;
						  dur: 6000"
    >
      <!-- Image -->
      <a-image
        src="#look-at-img"
        position="0 1.5 0"
        height="0.75"
        look-at="#cam"
      >
      </a-image>
    </a-box>

    <!-- Yellow Box -->
    <a-box color="#FFAA00" position="1.5 0.5 -6" look-at="#blue">
      <!-- Text -->
      <a-entity
        position="0 1.5 0"
        look-at="#cam"
        text="value: LOOK-AT; color: #212121; align: center; wrapCount: 9"
        geometry="primitive: plane; width: auto; height: 0.5"
        material="color: #FFAA00; shader: flat; visible: true"
      >
      </a-entity>
    </a-box>
  </a-scene>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Index extends Vue {}
</script>
