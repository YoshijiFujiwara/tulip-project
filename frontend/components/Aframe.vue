<template>
  <a-scene vr-mode-ui="enabled: false">
      <a-entity position="0 0 0">
        <a-camera></a-camera>
      </a-entity>
      <a-entity
        geometry="primitive: torusKnot;"
        scale="2 2 2"
        position="0 1.5 -5"
        rotation="0 45 0"
        material="color:#BBBBBB"
        wireframe
      >
        <a-animation easing="linear" attribute="rotation" repeat="indefinite" dur="30000" to="0 405 0"></a-animation>
      </a-entity>
      <a-sky color="#FDFDFD"></a-sky>
    </a-scene>
    <div 
      class="aframe" 
      v-for="aframe in aframes" 
      :key="aframe.id" 
      v-html="aframe.scene" 
    />
</template>

<script lang="js">
if (process.client) {
  Vue.use(require('aframe'))
}

export default {
  created () {
    aframe.registerComponent('wireframe', {
      dependencies: ['material'],
      init () {
        this.el.components.material.material.wireframe = true
      }
    })
  },
  name: 'afvr',
  data () {
    return {
      aframes: [
        {
          scene: '<a-scene vr-mode-ui="enabled: false" embedded><a-entity position="0 -1 3" scale="0.5 0.5 0.5"><a-camera zoom="0.8" fov="80" near="0.001" far="50"></a-camera></a-entity><a-torus-knot color="#e1e1e1" segments-tubular="124" radius="1" radius-tubular="0.1" wireframe="true"><a-animation easing="linear" attribute="rotation" repeat="indefinite" dur="30000" to="360 360 360"></a-animation></a-torus-knot></a-scene>',
          id: 1
        }
      ]
    }
  }
}
</script>