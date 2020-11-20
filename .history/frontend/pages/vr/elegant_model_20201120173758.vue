<template>
  <div>
    <a-scene renderer="colorManagement: true">
      <!-- Asset Management System -->
      <a-assets timeout="200000">
        <img id="floor" src="/vr/img/floor.jpg" />
        <img id="floor-NRM" src="/vr/img/floor.jpg" />
        <img id="sky" src="/vr/img/clear-sunny-sky.jpg" />
        <a-asset-item
          id="class_room"
          src="/vr/model/class_room/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <!-- Sky -->
      <a-sky src="#sky"></a-sky>

      <!-- Ground -->
      <a-plane
        material="color: #FFFFFF; src: [object HTMLImageElement]; repeat: 10 10; normalMap: [object HTMLImageElement]; normalTextureRepeat: 10 10"
        rotation="-90 0 0"
        scale="175.32933 230.0084 17.9481"
        geometry=""
      ></a-plane>

      <!-- Using the asset management system. -->
      <a-gltf-model
        src="#class_room"
        gltf-model="/vr/model/class_room/scene.gltf"
        visible=""
        scale="0.05 0.05 0.05"
      ></a-gltf-model>
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
