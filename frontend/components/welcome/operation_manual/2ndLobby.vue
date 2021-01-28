<template>
  <div>
    <v-row
      align="center"
      justify="center"
      :class="_isPC ? 'text-h5 mt-6' : _isSP ? 'text-h5' : ''"
      style="font-color: #ffffff"
    >
      <v-icon :size="_isPC ? 70 : _isSP ? 50 : 100" color="purple darken-2">
        mdi-numeric-2-box
      </v-icon>
      ロビー編
    </v-row>
    <v-row align="center" justify="center" class="text-h7 mt-4">
      ※画像をタップすると説明が表示されます
    </v-row>
    <v-row
      align="center"
      :class="_isPC ? 'mt-9' : _isSP ? 'mt-1' : ''"
      justify="space-between"
      grid
    >
      <v-col :cols="_isPC ? 6 : _isSP ? 12 : 0" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_avatar.png')"
              ></v-img>

              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                  :class="_isPC ? 'text-h5' : _isSP ? 'text-body-2' : ''"
                >
                  <p align="center">
                    ユーザ名を入力し、<br />
                    ４種類のアバターが選択できます。
                  </p>
                  <p align="center" class="mt-4">
                    音声チャットを有効にすると<br />
                    ロビーエリア、ブースエリアで音声通話を<br />
                    お楽しみいただけます。
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col :col="_isPC ? 6 : _isSP ? 12 : 0" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_lobby.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                  :class="_isPC ? 'text-h5' : _isSP ? 'text-body-2' : ''"
                >
                  <p align="center">こちらがロビーエリアになります。</p>
                  <p align="center" class="mt-4">
                    ロビーエリアでは作品パネルが並んでおり、<br />
                    作品パネルの情報から<br />
                    どの作品を見るか選択します
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col :cols="_isPC ? 6 : _isSP ? 12 : 0" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_thum.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                  :class="_isPC ? 'text-h5' : _isSP ? 'text-caption' : ''"
                >
                  <p align="center">
                    作品パネルには、<br />
                    作品タイトル、来場者累計といいね数、<br />
                    混雑状況などの情報が<br />
                    ブース内に入らなくてもわかるようになっています。
                  </p>
                  <p align="center" class="mt-4">
                    また、パネルの真ん中にある、<br />
                    サムネイル画像をクリックすることで<br />
                    ブース内に入ることができます。
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col :cols="_isPC ? 6 : _isSP ? 12 : 0" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_sound.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                  :class="_isPC ? 'text-h5' : _isSP ? 'text-body-2' : ''"
                >
                  <p align="center">
                    ブース内に出現している他のアバターは、<br />
                    イベントの参加者です。<br />
                    もちろん、自分が選択したアバターが相手側にも見えます。
                  </p>
                  <p align="center" class="mt-4">
                    また、音声チャットを有効化することで、<br />
                    参加者と交流することも可能です。
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>
