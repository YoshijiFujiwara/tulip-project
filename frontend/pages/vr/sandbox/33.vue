<template>
  <a-scene background="color: #FFFFFF">
    <!-- Camera Rig -->
    <a-entity id="cam-rig" position="0 0 4">
      <!--Camera -->
      <a-camera look-controls="pointerLockEnabled: true">
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-plane color="#DDDDDD" shader="flat" rotation="-90 0 0" scale="8 16 1">
    </a-plane>

    <!-- Blue -->
    <a-box
      id="blue"
      color="#00AAFF"
      position="-2 3 -4"
      random-color="target: #yellow"
    >
    </a-box>
    <!-- Yellow -->
    <a-box
      id="yellow"
      color="#FFAA00"
      position="-2 0.5 -4"
      random-color="target: #blue"
    >
    </a-box>

    <!-- Green -->
    <a-box id="green" color="#00AA00" position="2 3 -4" random-color> </a-box>
    <!-- Red -->
    <a-box id="red" material="color: #AA0000" position="2 0.5 -4" random-color>
    </a-box>
  </a-scene>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Index extends Vue {
  mounted() {
    window.AFRAME.registerComponent('random-color', {
      schema: {
        target: { type: 'selector', default: '' },
      },

      init() {
        const el = this.el
        const data = this.data

        el.addEventListener('click', function () {
          const randomHEX = '#' + Math.random().toString(16).substr(-6)

          if (data.target) {
            data.target.setAttribute('material', 'color', randomHEX)
          } else {
            el.setAttribute('material', 'color', randomHEX)
          }
        })
      },
    })
  }
}
</script>
