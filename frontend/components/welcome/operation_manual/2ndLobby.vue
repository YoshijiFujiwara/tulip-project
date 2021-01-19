<template>
  <v-container>
    <v-row align="center" justify="center" class="text-h4 font-weight-black">
      <v-icon x-large color="purple darken-2"> mdi-numeric-2-box </v-icon>
      ロビー編
    </v-row>
    <v-row align="center" justify="center">
      <v-col col="6" class="mx-auto"
        ><v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="500">
              <v-img :aspect-ratio="16/10" :src="require('@/assets/img_avatar.png')"></v-img>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    <v-col align-self="center"
                      >ユーザ名を入力し、</br> ４種類のアバターが選択できます。</br></br>
                      音声チャットを有効にすると</br>
                      ロビーエリア、ブースエリアで音声通話を</br>
                      お楽しみいただけます。</v-col
                    >
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover></v-col
      >
      <v-col col="6" class="mx-auto"
        ><v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="500">
              <v-img :aspect-ratio="16/10" :src="require('@/assets/img_lobby.png')"></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    <v-col align-self="center"
                      >こちらがロビーエリアになります。</br>
                      ロビーエリアでは作品パネルが並んでおり、</br></br>
                      作品パネルの情報から</br>
                      どの作品を見るか選択します。
                    </v-col>
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover></v-col
      >
    </v-row>
    <v-row align="center" justify="center">
      <v-col><v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="500">
              <v-img :aspect-ratio="16/10" :src="require('@/assets/img_thum.png')"></v-img>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    <v-col align-self="center"
                      >作品パネルには、</br>
作品タイトル、来場者累計といいね数、</br>
混雑状況などの情報がブース内に入らなくても</br>
わかるようになっています。</br></br>

また、パネルの真ん中にある</br>
サムネイル画像をクリックすることで</br>
ブース内に入ることができます。</v-col
                    >
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover></v-col>
      <v-col><v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="500">
              <v-img :aspect-ratio="16/10" :src="require('@/assets/img_sound.png')"></v-img>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    <v-col align-self="center"
                      >ブース内に他のアバターが出現しているのは、</br>
イベントの参加者です。もちろん、</br>
自分が選択したアバターが相手側にも見えます。</br></br>

また、音声チャットを有効化することで</br>
参加者と交流することも可能です。
</v-col
                    >
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>
