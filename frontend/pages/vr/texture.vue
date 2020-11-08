<template>
  <div>
    <!-- <a-scene>
      <a-assets timeout="20000">
        <a-asset-item id="gym-obj" src="/Hall of Columns.obj"></a-asset-item>
        <a-asset-item id="gym-mtl" src="/Hall of Columns.mtl"></a-asset-item>
      </a-assets>
      <a-obj-model
        position="5 0 0"
        rotation="0 0 0"
        src="#gym-obj"
        mtl="#gym-mtl"
      ></a-obj-model>
    </a-scene> -->
    <a-scene>
      <a-sky color="#24caff"></a-sky>
      <a-assets>
        <img id="texture" src="/texture.jpg" />
      </a-assets>
      <a-box
        width="1"
        height="2"
        depth="50"
        position="-1 1.5 -27"
        src="#texture"
        repeat="1 1"
        rotation="0 -2 0"
        color="#ccc"
      ></a-box>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Texture extends Vue {}
</script>
