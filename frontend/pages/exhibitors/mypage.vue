<template>
  <v-row>
    <v-col cols="12">
      <h3 class="mt-3 mb-3">ようこそ、{{ user.studentNumber }}さん</h3>
    </v-col>
    <v-card width="100%">
      <v-row class="pa-10">
        <v-col cols="4">
          <v-row>
            <v-col cols="12">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>出展ステータス</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#389c0a">mdi-check-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>作品登録</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#ff5252">mdi-close-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>ブース作成</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>出展まで</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-clock-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      あと
                      <span class="text-h4 mr-2">99日</span>
                      <span class="text-h4">23:59</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="6" class="production">
              <v-card>
                <a class="text-h5 text-center" @click="openCreateExhibitsModal">
                  <div>
                    <v-icon color="grey" size="120">mdi-clipboard-text</v-icon>
                  </div>
                  <div class="link-string">作品設定</div>
                </a>
              </v-card>
            </v-col>
            <v-col cols="6" class="booth">
              <v-card>
                <a class="text-h5 text-center" @click="openUploadBoothModal">
                  <div><v-icon color="grey" size="120">mdi-apps</v-icon></div>
                  <div class="link-string">ブース設定</div>
                </a>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="8">
          <div class="vr-booth">
            <a-scene
              embedded
              class="vr-scene"
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
                <!-- 出口_ASSET -->
                <a-asset-item
                  id="exit"
                  src="/vr/model/exit_door/scene.gltf"
                ></a-asset-item>
                <!-- 出展者 -->
                <a-asset-item
                  id="npc1"
                  src="/vr/model/npc1/scene.gltf"
                ></a-asset-item>
                <!-- 来場者 -->
                <a-asset-item
                  id="person"
                  src="/vr/model/person_small/scene.gltf"
                ></a-asset-item>
                <!-- ギャラリー_ASSET -->
                <img id="white" src="/vr/img/white.jfif" />
                <img id="slide1" src="/vr/img/slide1.jpg" />
                <img id="slide2" src="/vr/img/slide2.jpg" />
                <img id="slide3" src="/vr/img/slide3.jpg" />
                <img id="gallery2" src="/vr/img/dog.jpg" />
                <img id="gallery3" src="/vr/img/dog2.jpg" />
                <img id="gallery4" src="/vr/img/bloodhound.png" />
                <img id="gallery5" src="/vr/img/aa.jpg" />
                <!-- デモ動画_ASSET -->
                <img id="play" src="/vr/img/play.png" />
                <video
                  id="demo"
                  src="vr/movie/demo1.mp4"
                  autoplay
                  loop="true"
                  webkit-playsinline
                  playsinline
                ></video>
                <!-- 作品サンプル -->
                <a-asset-item
                  id="sakuhin"
                  src="/vr/model/sakuhin_example/scene.gltf"
                ></a-asset-item>
              </a-assets>

              <!-- 空 -->
              <a-sky src="#sky"></a-sky>
              <!-- ロビー -->
              <a-gltf-model src="#booth"></a-gltf-model>
              <!-- 出口 -->
              <a-gltf-model
                id="exit"
                src="#exit"
                scale="0.25 0.25 0.25"
                rotation="0 144.9084748399219 0"
                position="-3.52115 0.37144 5.35451"
              ></a-gltf-model>
              <!-- カメラ（視点） -->
              <a-entity
                camera=""
                position="0 1.5 0"
                wasd-controls=""
                rotation="0 -120 0"
                look-controls=""
                aframe-injected=""
                data-aframe-inspector-original-camera=""
              ></a-entity>
              <!-- 出展者キャラクター -->
              <a-gltf-model
                id="npc1"
                src="#npc1"
                scale="0.004 0.004 0.004"
                position="-3 0.25 -4.1"
                rotation="0 50 0"
              ></a-gltf-model>
              <!-- 来場者character -->
              <a-gltf-model
                id="person"
                src="#person"
                scale="0.2 0.2 0.2"
                rotation="180 90 180"
                position="0 0 -1.3"
              ></a-gltf-model>
              <a-gltf-model
                id="person"
                src="#person"
                scale="0.2 0.2 0.2"
                rotation="180 90 180"
                position="0 0 1.3"
              ></a-gltf-model>
              <a-gltf-model
                id="person"
                src="#person"
                scale="0.2 0.2 0.2"
                rotation="180 90 180"
                position="0 0 1.7"
              ></a-gltf-model>
              <a-gltf-model
                id="person"
                src="#person"
                scale="0.2 0.2 0.2"
                rotation="0 -3.075637444262259 0"
                position="-0.39308 0.35 3.58408"
                gltf-model="/vr/model/person_small/scene.gltf"
              ></a-gltf-model>
              <a-gltf-model
                id="person"
                src="#person"
                scale="0.2 0.2 0.2"
                rotation="180 90 180"
                position="2.5 0.3 1.7"
              ></a-gltf-model>
              <a-gltf-model
                id="person"
                src="#person"
                scale="0.2 0.2 0.2"
                rotation="180 90 180"
                position="2.5 0.3 1.3"
                gltf-model="/vr/model/person_small/scene.gltf"
              ></a-gltf-model>
              <!-- ギャラリー_作品概要 -->
              <a-image
                id="white"
                src="#white"
                geometry="primitive: box"
                scale="0.8 1 0.2"
                position="-0.22305 1.23617 -4.61989"
                material=""
              ></a-image>
              <a-image
                id="thumbnail"
                src="#sky"
                scale="0.2 0.25 1"
                position="-0.23734 1.33798 -4.51752"
                material=""
                geometry=""
              ></a-image>
              <a-entity
                id="title"
                text="value: TitleTitle; align: center; color: #153093; lineHeight: 3; letterSpacing: 5; negate: false"
                color="#000000"
                scale="3 3 1"
                position="-0.21761 1.61438 -4.45262"
              ></a-entity>
              <a-entity
                id="description"
                text="value: Description; align: center; color: #424242; lineHeight: 0.4"
                color="#000000"
                scale="2 2 1"
                position="-0.23672 1.09887 -4.45262"
              ></a-entity>
              <!-- ギャラリー_作品紹介 -->
              <a-image
                id="slide1"
                src="#slide1"
                material=""
                geometry="primitive: box"
                scale="0.8 1 0.2"
                position="3.08606 1.23617 -3.09248"
                rotation="0 -47.63 0"
              ></a-image>
              <a-image
                id="slide2"
                src="#slide2"
                material=""
                geometry="primitive: box"
                scale="0.8 1 0.2"
                position="4.38366 1.23617 0.24475"
                rotation="0 88.45 0"
              ></a-image>
              <a-image
                id="slide3"
                src="#slide3"
                material=""
                geometry="primitive: box"
                scale="0.8 1 0.2"
                position="2.87774 1.24431 3.38673"
                rotation="0 44.73 0"
              ></a-image>
              <a-image
                id="gallery5"
                src="#gallery5"
                material=""
                geometry="primitive: box"
                scale="0.8 1 0.2"
                position="-0.34878 1.23617 4.69281"
              ></a-image>
              <!-- デモ動画のTOPのタイトル -->
              <a-entity
                id="title"
                text="value: TitleTitle; align: center; color: #ffffff; lineHeight: 3; letterSpacing: 5; negate: false"
                color="#000000"
                scale="10 10 1"
                position="-3.59467 3.50902 0.01258"
                rotation="0 90 0"
              ></a-entity>
              <!-- デモ動画 -->
              <a-curvedimage
                id="demo"
                src="#demo"
                material="height: 258"
                geometry="thetaLength: 88; thetaStart: 1"
                scale="2.15 2.84331 2.15"
                position="0.37378 1.72916 0.08129"
                rotation="0 -135.63056926336847 0"
              ></a-curvedimage>
              <!-- 作品 -->
              <a-gltf-model
                id="sakuhin"
                src="#sakuhin"
                scale="0.3 0.3 0.3"
                position="-0.283 0.63654 0"
              ></a-gltf-model>
            </a-scene>

            <v-card class="ma-auto card-area" outlined>
              <v-card-title class="justify-center">
                <v-icon>mdi-information-outline</v-icon>
                ただいまテストサーバで公開中です。
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn large class="px-15" @click="connectEntrance">入場</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <CreateExhibitDialog v-model="isOpenCreateExhibitDialog" />
    <UploadBoothDialog v-model="isOpenUploadBoothDialog" />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CreateExhibitDialog from '@/components/exhibitors/mypage/CreateExhibitDialog.vue'
import UploadBoothDialog from '@/components/exhibitors/mypage/UploadBoothDialog.vue'
import ExhibitApi from '../../plugins/axios/modules/exhibit'

@Component({
  components: {
    CreateExhibitDialog,
    UploadBoothDialog,
  },
})
export default class MyPage extends Vue {
  user: object = {}

  // 展示物作成モーダルの開閉
  isOpenCreateExhibitDialog: boolean = false

  isOpenUploadBoothDialog: boolean = false

  openCreateExhibitsModal() {
    // 作品登録用モーダルを開く
    this.isOpenCreateExhibitDialog = true
  }

  openUploadBoothModal() {
    // ブース登録用モーダルを開く
    this.isOpenUploadBoothDialog = true
  }

  connectEntrance() {
    alert('入場')
  }

  async created() {
    this.user = await this.$auth.user

    const response = await ExhibitApi.getExhibits()
    console.log('response', response)

    // const response2 = await ExhibitApi.createExhibit()
    // console.log('response2', response2)
  }
}
</script>
<style lang="scss">
.link-string {
  color: #000000;
}
a {
  color: #000000;
}
.vr-booth {
  width: 100%;
  height: 100%;
  background-color: aqua;
  display: block;
}
.vr-scene {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
}
.card-area {
  z-index: 9999;
  position: relative;
  top: -200px;
  opacity: 0.6;
}
</style>
