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
      ><a-assets timeout="200000"
        ><img id="floor" src="/vr/img/grass.jfif" />
        <img id="floor-NRM" src="/vr/img/grass.jfif" />
        <img id="sand" src="/vr/img/sand.jpg" />
        <img id="sky" src="/vr/img/vr_background.jpg" />
        <a-asset-item
          id="room"
          src="/vr/model/room_ver1/scene.gltf"
        ></a-asset-item>
        <!-- 出展者 -->
        <a-asset-item id="npc1" src="/vr/model/npc1/scene.gltf"></a-asset-item>
        <!-- 来場者 -->
        <a-asset-item
          id="person"
          src="/vr/model/person_small/scene.gltf"
        ></a-asset-item>
        <!-- 作品サンプル -->
        <a-asset-item
          id="sakuhin"
          src="/vr/model/sakuhin_example/scene.gltf"
        ></a-asset-item>
        <!-- 壁 -->
        <a-asset-item
          id="fence"
          src="/vr/model/fence/scene.gltf"
        ></a-asset-item>
      </a-assets>
      <!-- 空 -->
      <a-sky src="#sky"></a-sky>
      <!-- 地面 -->
      <a-plane
        material="color: #FFFFFF; src: #floor; repeat: 100 100; normalMap: #floor_NRM; normalTextureRepeat: 100 100; color: #952323"
        rotation="-90 0 0"
        scale="160 200 10"
        geometry=""
        position=""
        visible=""
      ></a-plane>
      <!-- 壁 -->
      <a-gltf-model
        src="#fence"
        gltf-model="/vr/model/fence/scene.gltf"
        scale="115 50 100"
        position=""
      ></a-gltf-model>
      <!-- ブース -->
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -180 0"
        scale="0.5 0.5 0.5"
        position="-65 0.1 -52.97048"
      ></a-gltf-model
      ><a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -180 0"
        scale="0.5 0.5 0.5"
        position="-65 0.1 -25"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -180 0"
        scale="0.5 0.5 0.5"
        position="-65 0.1 0"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -180 0"
        scale="0.5 0.5 0.5"
        position="-65 0.1 25"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -180 0"
        scale="0.5 0.5 0.5"
        position="-65 0.1 50"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="-35 0.1 -85"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="-10 0.1 -85"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="15 0.1 -85"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="40 0.1 -85"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation=""
        scale="0.5 0.5 0.5"
        position="65 0.1 -50"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation=""
        scale="0.5 0.5 0.5"
        position="65 0.1 -25"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation=""
        scale="0.5 0.5 0.5"
        position="65 0.1 0"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation=""
        scale="0.5 0.5 0.5"
        position="65 0.1 25"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation=""
        scale="0.5 0.5 0.5"
        position="65 0.1 50"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -90 0"
        scale="0.5 0.5 0.5"
        position="40 0.1 85"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -90 0"
        scale="0.5 0.5 0.5"
        position="15 0.1 85"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -90 0"
        scale="0.5 0.5 0.5"
        position="-10 0.1 85"
      ></a-gltf-model>
      <a-gltf-model
        src="#room"
        gltf-model="/vr/model/room_ver1/scene.gltf"
        rotation="0 -90 0"
        scale="0.5 0.5 0.5"
        position="-35 0.1 85"
      ></a-gltf-model>
      <!-- 出展者キャラクター -->
      <a-gltf-model
        id="npc1"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 70 0"
        scale="0.01 0.01 0.01"
        position="-68 0.1 41.72168"
      ></a-gltf-model
      ><a-gltf-model
        id="npc2"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 70 0"
        scale="0.01 0.01 0.01"
        position="-68 0.1 17"
      ></a-gltf-model>
      <a-gltf-model
        id="npc3"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 70 0"
        scale="0.01 0.01 0.01"
        position="-68 0.1 -8"
      ></a-gltf-model>
      <a-gltf-model
        id="npc4"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 70 0"
        scale="0.01 0.01 0.01"
        position="-68 0.1 -33"
      ></a-gltf-model>
      <a-gltf-model
        id="npc5"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 70 0"
        scale="0.01 0.01 0.01"
        position="-68 0.1 -58"
      ></a-gltf-model>
      <a-gltf-model
        id="npc6"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -30 0"
        scale="0.01 0.01 0.01"
        position="-26.8 0.1 -88"
      ></a-gltf-model>
      <a-gltf-model
        id="npc7"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -30 0"
        scale="0.01 0.01 0.01"
        position="-1.8 0.1 -88"
      ></a-gltf-model>
      <a-gltf-model
        id="npc8"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -30 0"
        scale="0.01 0.01 0.01"
        position="23.2 0.1 -88"
      ></a-gltf-model>
      <a-gltf-model
        id="npc9"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -30 0"
        scale="0.01 0.01 0.01"
        position="48.2 0.1 -88"
      ></a-gltf-model>
      <a-gltf-model
        id="npc10"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -70 0"
        scale="0.01 0.01 0.01"
        position="68 0.1 58"
      ></a-gltf-model
      ><a-gltf-model
        id="npc11"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -70 0"
        scale="0.01 0.01 0.01"
        position="68 0.1 33"
      ></a-gltf-model>
      <a-gltf-model
        id="npc12"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -70 0"
        scale="0.01 0.01 0.01"
        position="68 0.1 8"
      ></a-gltf-model>
      <a-gltf-model
        id="npc13"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -70 0"
        scale="0.01 0.01 0.01"
        position="68 0.1 -17"
      ></a-gltf-model>
      <a-gltf-model
        id="npc14"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 -70 0"
        scale="0.01 0.01 0.01"
        position="68 0.1 -42"
      ></a-gltf-model>
      <a-gltf-model
        id="npc15"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 140 0"
        scale="0.01 0.01 0.01"
        position="-42.8 0.1 88"
      ></a-gltf-model>
      <a-gltf-model
        id="npc16"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 140 0"
        scale="0.01 0.01 0.01"
        position="-17.8 0.1 88"
      ></a-gltf-model>
      <a-gltf-model
        id="npc17"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 140 0"
        scale="0.01 0.01 0.01"
        position="7.2 0.1 88"
      ></a-gltf-model>
      <a-gltf-model
        id="npc18"
        src="#npc1"
        gltf-model="/vr/model/npc1/scene.gltf"
        rotation="0 140 0"
        scale="0.01 0.01 0.01"
        position="32.2 0.1 88"
      ></a-gltf-model>
      <!-- 来場者character -->
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="0 0 -1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="0 0 1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="1.5 0 0"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="1.5 0 -1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="1.5 0 1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-1.5 0 0"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-1.5 0 -1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-1.5 0 1.5"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-60 0 0"
        rotation="180 90 180"
      ></a-gltf-model>
      <a-gltf-model
        id="person"
        src="#person"
        gltf-model="/vr/model/person_small/scene.gltf"
        scale="0.7 0.8 0.8"
        position="-60 0 -3"
        rotation="180 90 180"
      ></a-gltf-model>
      <!-- 作品 -->
      <a-gltf-model
        id="sakuhin"
        src="#sakuhin"
        gltf-model="/vr/model/sakuhin_example/scene.gltf"
        position="-67.72451 1.63938 0"
        scale="1.5 1.5 1.5"
      ></a-gltf-model>
      <div class="a-loader-title" style="display: none">
        展示会から始まるVR生活
      </div>
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
