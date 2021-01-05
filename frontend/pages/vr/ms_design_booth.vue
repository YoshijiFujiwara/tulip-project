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
        <!-- 空_ASSET -->
        <img id="sky" src="/vr/img/vr_background.jpg" />
        <!-- ブース_ASSET -->
        <a-asset-item
          id="booth"
          src="/vr/model/booth/scene.gltf"
        ></a-asset-item>
        <!-- 出展者 -->
        <a-asset-item id="npc1" src="/vr/model/npc1/scene.gltf"></a-asset-item>
        <!-- 来場者 -->
        <a-asset-item
          id="person"
          src="/vr/model/person_small/scene.gltf"
        ></a-asset-item>
        <!-- 作品_ASSET -->
      </a-assets>

      <!-- 空 -->
      <a-sky src="#sky"></a-sky>
      <!-- ロビー -->
      <a-gltf-model src="#booth"></a-gltf-model>
      <!-- 出展者キャラクター -->
      <a-gltf-model
        id="npc1"
        src="#npc1"
        scale="0.004 0.004 0.004"
        gltf-model="/vr/model/npc1/scene.gltf"
      ></a-gltf-model>
      <!-- 来場者character -->
      <a-gltf-model
        id="person"
        src="#person"
        scale="0.7 0.8 0.8"
        position="-60 5.5 0"
        rotation="180 90 180"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        scale="0.7 0.8 0.8"
        position="-60 5.5 -3"
        rotation="180 90 180"
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
