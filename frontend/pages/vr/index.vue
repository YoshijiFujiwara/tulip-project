<template>
  <!-- ここでこのスタイルを指定しないと、VRボタンがどっかいく -->
  <div style="position: absolute; height: 100%; width: 100%">
    <a-scene renderer="colorManagement: true">
      <!-- Asset Management System -->
      <a-assets timeout="200000">
        <img id="floor" src="/vr/img/floor.jpg" />
        <img id="floor-NRM" src="/vr/img/floor.jpg" />
        <img id="sky" src="/vr/img/clear-sunny-sky.jpg" />

        <!-- 作品のサムネイル一覧の読み込み -->
        <img
          v-for="exhibit in exhibits"
          :id="`exhibit-thumbnail-${exhibit.id}`"
          :key="`exhibit-thumbnail-${exhibit.id}`"
          :src="exhibit.thumbnail"
          crossorigin="anonymous"
        />

        <!-- 作品のプレゼン画像一覧（仮）の読み込み -->
        <img
          v-for="exhibit in exhibits"
          :id="`exhibit-presentationImage-${exhibit.id}`"
          :key="`exhibit-presentationImage-${exhibit.id}`"
          :src="exhibit.presentationImage"
          crossorigin="anonymous"
        />

        <a-asset-item
          id="class_room"
          src="/vr/model/class_room/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <!-- カメラ -->
      <a-entity position="0 0 6">
        <a-entity
          camera
          position="0 1.6 0"
          look-controls="pointerLockEnabled: true"
          wasd-controls="acceleration: 200"
        >
          <a-cursor></a-cursor>
        </a-entity>
      </a-entity>

      <!-- 空 -->
      <a-sky src="#sky"></a-sky>

      <!-- 地面 -->
      <a-plane
        material="color: #FFFFFF; src: #floor-NRM; repeat: 10 10; normalMap: #floor-NRM; normalTextureRepeat: 10 10"
        rotation="-90 0 0"
        scale="175.32933 230.0084 17.9481"
        geometry=""
      ></a-plane>

      <!-- 左手前（作品ID１） -->
      <a-entity>
        <a-gltf-model
          src="#class_room"
          gltf-model="/vr/model/class_room/scene.gltf"
          visible=""
          scale="0.009 0.009 0.009"
          rotation="0 129.48903465736117 0"
          position="-14.13486 0.05 -10.22237"
        ></a-gltf-model>

        <!-- サムネイル画像 -->
        <a-image
          :src="`#exhibit-thumbnail-${exhibits[0].id}`"
          scale="3.60725 3.29728 4.52257"
          position="-5.09833 1.71093 -11.20692"
          material=""
          geometry=""
          rotation="0 129.48903465736117 0"
        ></a-image>

        <!-- プレゼンテーション画像 -->
        <a-image
          :src="`#exhibit-presentationImage-${exhibits[0].id}`"
          scale="3.60725 3.29728 4.52257"
          position="-19.69315 1.71093 -6.28015"
          material=""
          geometry=""
          rotation="0 129.6454521354319 0"
        ></a-image>
      </a-entity>

      <!-- 右手前（作品ID２） -->
      <a-gltf-model
        src="#class_room"
        gltf-model="/vr/model/class_room/scene.gltf"
        visible=""
        scale="0.009 0.009 0.009"
        rotation="0 40.14027721127521 0"
        position="20.14977 0.05 -10.22237"
      ></a-gltf-model>

      <!-- 左奥（作品ID３） -->
      <a-gltf-model
        src="#class_room"
        gltf-model="/vr/model/class_room/scene.gltf"
        visible=""
        scale="0.009 0.009 0.009"
        rotation="0 129.48903465736117 0"
        position="-14.13486 0.05 -40.4821"
      ></a-gltf-model>

      <!-- 右奥（作品ID４） -->
      <a-gltf-model
        src="#class_room"
        gltf-model="/vr/model/class_room/scene.gltf"
        visible=""
        scale="0.009 0.009 0.009"
        rotation="0 40.14027721127521 0"
        position="20.14977 0.05 -40.4821"
      ></a-gltf-model>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExhibitApi from '../../plugins/axios/modules/exhibit'
import { Exhibit } from '../../types/exhibit'

@Component({
  auth: false,
  layout: 'vr',
})
export default class Index extends Vue {
  exhibits: Exhibit[] = []

  async created() {
    // 作品一覧を取得する
    const exhibits = await ExhibitApi.getExhibits()
    this.exhibits = exhibits
  }
}
</script>
