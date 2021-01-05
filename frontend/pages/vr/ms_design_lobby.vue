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
        <!-- ロビー_ASSET -->
        <a-asset-item
          id="lobby"
          src="/vr/model/lobby_place/scene.gltf"
        ></a-asset-item>
        <!-- 来場者 -->
        <a-asset-item
          id="person"
          src="/vr/model/person_small/scene.gltf"
        ></a-asset-item>
        <!-- 作品_ASSET -->
        <img id="exhibition1" src="/vr/img/gori.jpg" />
        <img id="exhibition2" src="/vr/img/dog.jpg" />
        <img id="exhibition3" src="/vr/img/dog2.jpg" />
        <img id="exhibition4" src="/vr/img/bloodhound.png" />
        <img id="exhibition5" src="/vr/img/aa.jpg" />
        <img id="exhibition6" src="/vr/img/InternalEar.jpg" />
        <img id="exhibition7" src="/vr/img/dog2.jpg" />
        <img id="exhibition8" src="/vr/img/bloodhound.jpg" />
      </a-assets>

      <!-- 空 -->
      <a-sky src="#sky"></a-sky>
      <!-- ロビー -->
      <a-gltf-model src="#lobby"></a-gltf-model>
      <!-- カメラ（視点） -->
      <a-entity
        camera=""
        position="0 10 0"
        wasd-controls=""
        rotation="-10.542423430407146 272.6133189232455 0"
        look-controls=""
        aframe-injected=""
        data-aframe-inspector-original-camera=""
      ></a-entity>
      <!-- 作品紹介 -->
      <!-- <a-text
        value="Hello, World 001 opacity"
        color="white"
        width="5"
        opacity="0.3"
      ></a-text> -->
      <a-image
        src="#exhibition1"
        scale="15 15 2"
        position="-6.75904 13.58189 -50.73236"
        material=""
        geometry="primitive: box"
      ></a-image>
      <a-image
        src="#exhibition2"
        scale="15 15 2"
        position="31.93444 13.58189 -38.7684"
        rotation="0 -50 0"
        geometry="primitive: box"
      ></a-image>
      <a-image src="#exhibition3"> </a-image>
      <a-image src="#exhibition4"> </a-image>
      <a-image src="#exhibition5"> </a-image>
      <a-image src="#exhibition6"> </a-image>
      <a-image src="#exhibition7"> </a-image>
      <a-image src="#exhibition8"> </a-image>

      <!-- 来場者character -->
      <a-gltf-model
        id="person"
        src="#person"
        scale="0.7 0.8 0.8"
        position="0 5.5 -1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        scale="0.7 0.8 0.8"
        position="0 5.5 1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        scale="0.7 0.8 0.8"
        position="1.5 5.5 0"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        scale="0.7 0.8 0.8"
        position="1.5 5.5 -1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        scale="0.7 0.8 0.8"
        position="1.5 5.5 1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-1.5 5.5 0"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-1.5 5.5 -1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-1.5 5.5 1.5"
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
