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
      <a-assets>
        <img id="floor" src="/vr/img/floor.jpg" />
        <img id="floor-NRM" src="/vr/img/floor.jpg" />
      </a-assets>

      <!-- Ground -->
      <a-plane
        material="color: #FFFFFF;
                        src: #floor;
                        repeat: 5 5;
                        normal-map: #floor-NRM;
                        normal-texture-repeat: 5 5"
        rotation="-90 0 0"
        scale="10 10 1"
      >
      </a-plane>
    </a-scene>

    <a-assets timeout="200000">
      <img id="sky" src="/vr/img/clear-sunny-sky.jpg" />
      <a-asset-item
        id="classroom_stage"
        src="/vr/model/classroom_stage/scene.gltf"
      ></a-asset-item>
    </a-assets>

    <!-- Sky -->
    <a-sky src="#sky"></a-sky>

    <!-- Camera -->
    <a-entity position="-20 0 0">
      <a-camera></a-camera>
    </a-entity>

    <!-- Using the asset management system. -->
    <a-gltf-model src="#classroom_stage"></a-gltf-model>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class ElegantModel extends Vue {}
</script>
