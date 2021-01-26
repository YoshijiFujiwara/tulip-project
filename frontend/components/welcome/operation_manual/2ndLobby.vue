<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      :class="_isPC ? 'text-h3 mt-6' : _isSP ? 'text-h4' : ''"
      style="font-color: #ffffff"
    >
      <v-icon :size="_isPC ? 70 : _isSP ? 50 : 100" color="purple darken-2">
        mdi-numeric-2-box
      </v-icon>
      ロビー編
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
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    ユーザ名を入力し、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    ４種類のアバターが選択できます。
                  </v-row>
                  <v-row align="center" class="mt-4 mx-auto" justify="center">
                    音声チャットを有効にすると
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    ロビーエリア、ブースエリアで音声通話を
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    お楽しみいただけます。
                  </v-row>
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
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    こちらがロビーエリアになります。
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    ロビーエリアでは作品パネルが並んでおり、
                  </v-row>
                  <v-row align="center" class="mt-4 mx-auto" justify="center">
                    作品パネルの情報から
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    どの作品を見るか選択します
                  </v-row>
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
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    作品パネルには、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    作品タイトル、来場者累計といいね数、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    混雑状況などの情報がブース内に入らなくても
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto mb-4">
                    わかるようになっています。
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    また、パネルの真ん中にある
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    サムネイル画像をクリックすることで
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    ブース内に入ることができます。
                  </v-row>
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
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    ブース内に他のアバターが出現しているのは、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    イベントの参加者です。もちろん、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto mb-4">
                    自分が選択したアバターが相手側にも見えます。
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    また、音声チャットを有効化することで
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    参加者と交流することも可能です。
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>
