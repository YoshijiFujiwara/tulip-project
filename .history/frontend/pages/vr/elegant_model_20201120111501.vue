<template>
  <div>
    <a-scene renderer="colorManagement: true">
      <!-- Asset Management System -->
      <a-assets timeout="200000">
        <img id="floor" src="/vr/img/floor.jpg" />
        <img id="floor-NRM" src="/vr/img/floor.jpg" />
        <img id="sky" src="/vr/img/clear-sunny-sky.jpg" />
        <a-asset-item
          id="classroom_stage"
          src="/vr/model/classroom_stage/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <!-- Sky -->
      <a-sky src="#sky"></a-sky>

      <!-- Ground -->
      <a-plane
        material="color: #FFFFFF;
                        src: #floor;
                        repeat: 10 10;
                        normal-map: #floor-NRM;
                        normal-texture-repeat: 10 10"
        rotation="-90 0 0"
        scale="10 10 1"
      >
      </a-plane>

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
