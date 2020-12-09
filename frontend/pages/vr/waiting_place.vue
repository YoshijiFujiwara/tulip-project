<template>
  <div>
    <a-scene renderer="colorManagement: true">
      <!-- Asset Management System -->
      <a-assets timeout="200000">
        <img id="floor" src="/vr/img/vr_background.jpg" />
        <img id="floor-NRM" src="/vr/img/vr_background.jpg" />
        <img id="sky" src="/vr/img/vr_background.jpg" />
        <img id="thumbnail1" src="/vr/img/dog.jpg" />

        <!-- 混雑レベル画像 -->
        <img id="lv1" src="/vr/img/lv1.jpg" />
        <img id="lv2" src="/vr/img/lv2.jpg" />
        <img id="lv3" src="/vr/img/lv3.jpg" />
        <a-asset-item
          id="class_room"
          src="/vr/model/class_room/scene.gltf"
        ></a-asset-item>
        <a-asset-item
          id="waiting_place"
          src="/vr/model/Robbie_place/scene.gltf"
        ></a-asset-item>
        <audio id="bgm" src="/vr/music/apex_OST.mp3"></audio>

        <a-asset-item
          id="ap_fonts"
          src="/vr/fonts/hui-msdf.json"
        ></a-asset-item>
      </a-assets>

      <!-- カメラ -->
      <a-entity position="0 0 6">
        <a-entity
          camera
          position="0 1.6 0"
          look-controls="pointerLockEnabled: true"
          wasd-controls="acceleration: 300"
        >
          <a-cursor></a-cursor>
        </a-entity>
      </a-entity>

      <!-- Sky -->
      <a-sky src="#sky"></a-sky>

      <!-- ロビー bgmあり -->
      <a-gltf-model
        src="#waiting_place"
        gltf-model="/vr/model/Robbie_place/scene.gltf"
        visible=""
        scale="0.21742 0.21742 0.21742"
        rotation=""
        position="-0.18153 0 -0.80929"
      ></a-gltf-model>
      <!-- <a-gltf-model
        src="#waiting_place"
        gltf-model="/vr/model/Robbie_place/scene.gltf"
        visible=""
        scale="0.21742 0.21742 0.21742"
        rotation=""
        position="-0.18153 0 -0.80929"
        sound="src: #bgm; autoplay: true"
      ></a-gltf-model> -->

      <!-- 混雑状況 -->
      <a-image
        src="#lv1"
        scale="6.28331 1.87048 2.56557"
        position="-0.21543 7.2648 -11.12004"
        material=""
        geometry=""
        rotation=""
      ></a-image>

      <!--  作品ID1  -->
      <a-text
        value="ID01"
        negate="true"
        scale="3 3 2"
        position="-2.39107 6.08589 -11.31114"
        text="color: #ff69b4"
      ></a-text>
      <a-text
        value="hogehoge"
        negate="true"
        scale="3 3 2"
        position="-0.62506 6.2993 -11.66269"
        text="color: #ff69b4; negate: true"
      ></a-text>

      <!--  作品サムネ -->
      <a-image
        src="#thumbnail1"
        scale="2.04633 1.87048 2.56557"
        position="-0.12895 2.56849 -10.29698"
        material=""
        geometry=""
        rotation="0 180 0"
      ></a-image>

      <!-- 混雑状況 -->
      <a-image
        src="#lv2"
        scale="6.28331 1.87048 2.56557"
        position="7.03692 7.3348 -8.09562"
        material=""
        geometry=""
        rotation="0 -42.646394607177434 0"
      ></a-image>
      <!--  作品ID2  -->
      <a-text
        value="ID02"
        negate="true"
        scale="3 3 2"
        position="-2.39107 6.08589 -11.31114"
        text="color: #ff69b4"
      ></a-text>
      <a-text
        value="hogehoge2"
        negate="true"
        scale="3 3 2"
        position="7.26277 6.044 -8.85178"
        text="color: #ff69b4"
      ></a-text>

      <!--  作品サムネ -->
      <a-image
        src="#thumbnail1"
        scale="2.04633 1.87048 2.56557"
        position="-0.12895 2.56849 -10.29698"
        material=""
        geometry=""
        rotation="0 180 0"
      ></a-image>
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
