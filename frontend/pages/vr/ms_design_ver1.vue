<template>
  <div>
    <a-scene
      inspector=""
      keyboard-shortcuts=""
      screenshot=""
      vr-mode-ui=""
      device-orientation-permission-ui=""
      renderer="colorManagement: true"
      visible=""
      ><a-assets timeout="200000">
        <img id="sky" src="/vr/img/vr_background.jpg" />
        <a-asset-item
          id="map"
          src="/vr/model/old_map_3d_model/scene.gltf"
        ></a-asset-item>
        <!-- 作品サンプル -->
        <a-asset-item
          id="music1"
          src="/vr/model/music/drums_studio/scene.gltf"
        ></a-asset-item>
        <!-- 壁 -->
        <a-asset-item
          id="fence"
          src="/vr/model/fence/scene.gltf"
        ></a-asset-item>
      </a-assets>
      <!-- 空 -->
      <a-sky
        src="#sky"
        material="color: #fdd886"
        scale="10 10 10"
        geometry=""
      ></a-sky>
      <!-- 地面 -->
      <a-gltf-model
        src="#map"
        gltf-model="/vr/model/old_map_3d_model/scene.gltf"
        scale="10 10 10"
      ></a-gltf-model>
      <!-- ブース -->
      <a-sphere
        material="color: #AA0000; shader: flat; opacity: 0.5"
        radius="0.5"
        position="-1.5 0.4 -0.5"
        geometry=""
        scale="0.5 0.5 0.5"
      ></a-sphere>
      <a-sphere
        material="color: #AA0000; shader: flat; opacity: 0.5"
        radius="0.5"
        position="-1.5 0.4 0.1"
        geometry=""
        scale="0.5 0.5 0.5"
      ></a-sphere
      ><a-sphere
        material="color: #AA0000; shader: flat; opacity: 0.5"
        radius="0.5"
        position="-1.5 0.4 0.7"
        geometry=""
        scale="0.5 0.5 0.5"
      ></a-sphere>
      ><a-sphere
        material="color: #AA0000; shader: flat; opacity: 0.5"
        radius="0.5"
        position="-0.75 0.4 -0.5"
        geometry=""
        scale="0.5 0.5 0.5"
      ></a-sphere>
      ><a-sphere
        material="color: #AA0000; shader: flat; opacity: 0.5"
        radius="0.5"
        position="-0.75 0.4 0.1"
        geometry=""
        scale="0.5 0.5 0.5"
      ></a-sphere>
      <a-sphere
        material="color: #AA0000; shader: flat; opacity: 0.5"
        radius="0.5"
        position="-0.75 0.4 0.7"
        geometry=""
        scale="0.5 0.5 0.5"
      ></a-sphere>
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
