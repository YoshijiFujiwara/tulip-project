<template>
  <div>
    <v-row
      align="center"
      justify="center"
      :class="_isPC ? 'text-h3 mt-6' : _isSP ? 'text-h4' : ''"
      style="font-color: #ffffff"
    >
      <v-icon :size="_isPC ? 70 : _isSP ? 50 : 100" color="purple darken-2">
        mdi-numeric-2-box
      </v-icon>
      ブース編
    </v-row>
    <v-row
      align="center"
      :class="_isPC ? 'mt-9' : _isSP ? 'mt-1' : ''"
      justify="center"
    >
      <v-col :cols="_isPC ? 6 : 12" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_booth.png')"
              ></v-img>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <p align="center">
                    こちらはブースエリアになります。<br />
                    真ん中のスクリーンには作品の動画が流れています。
                  </p>
                  <p align="center" class="mt-4 mx-auto">
                    また、時計回りに右から<br />
                    作品説明、作品の説明画像があります。
                  </p>
                  <p align="center" class="mx-auto mt-4">
                    気に入った作品にはスクリーン右下にある<br />
                    いいねボタンを押しましょう。
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col :cols="_isPC ? 6 : 12" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_reaction.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <p align="center">
                    ブースエリアの真ん中には、<br />
                    リアクションマシーンがあります。
                  </p>
                  <p align="center" class="mt-4">
                    6種類のリアクションパターンがあり、<br />
                    自分のアバターの頭部に表示されます。
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col :cols="_isPC ? 6 : 12" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_bird.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <p align="center">
                    ブースエリアには、<br />
                    プレゼンテーターが存在します。
                  </p>
                  <p align="center" class="mt-4">
                    このアバターが作った作品を<br />
                    ブースエリアにて発表します。
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col :cols="_isPC ? 6 : 12" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_exit.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <p align="center">
                    一通り作品を楽しんだあとは<br />
                    スクリーンの左側にある出口から退場できます。
                  </p>
                  <p align="center" class="mt-4">
                    さて、次はどのブースをみようかな？
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
