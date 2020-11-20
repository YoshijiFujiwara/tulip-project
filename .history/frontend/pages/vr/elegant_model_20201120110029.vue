<template>
  <div>
    <a-scene renderer="colorManagement: true">
      <a-assets timeout="200000">
        <img id="sky" src="/vr/img/clear-sunny-sky.jpg" />
        <a-asset-item
          id="classroom_stage"
          src="/vr/model/classroom_stage/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <!-- Sky -->
      <!-- <a-sky src="#sky"></a-sky> -->

      <!-- Camera -->
      <a-entity position="-20 0 0">
        <a-camera></a-camera>
      </a-entity>

      <!-- Using the asset management system. -->
      <a-gltf-model src="#classroom_stage"></a-gltf-model>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class ElegantModel extends Vue {}
</script>
