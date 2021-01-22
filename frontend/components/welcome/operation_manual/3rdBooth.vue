<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="text-h3 mt-6"
      style="font-color: #ffffff"
    >
      <v-icon size="70" color="purple darken-2"> mdi-numeric-3-box </v-icon>
      ブース編
    </v-row>
    <v-row align="center" class="mt-9" justify="center">
      <v-col col="6" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_booth.png')"
              ></v-img>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    こちらはブースエリアになります。
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    真ん中のスクリーンには作品の動画が流れています。
                  </v-row>
                  <v-row align="center" class="mt-4 mx-auto" justify="center">
                    また、時計回りに右から
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    作品説明、作品の説明画像があります。
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto mt-4">
                    気に入った作品にはスクリーン右下にある
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    いいねボタンを押しましょう。
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col col="6" class="mx-auto">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_reaction.PNG')"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    ブースエリアには、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    真ん中にリアクションマシーンがあります。
                  </v-row>
                  <v-row align="center" class="mt-4 mx-auto" justify="center">
                    6種類のリアクションパターンがあり、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    自分のアバターの頭部に表示されます。
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_bird.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    ブースエリアには、
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    プレゼンテーターが存在します。
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto mt-4">
                    このアバターが作った作品をブースエリアにて
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    発表します。
                  </v-row>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="1000">
              <v-img
                :aspect-ratio="16 / 10"
                :src="require('@/assets/img_exit.png')"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-row align="center" justify="center" class="mx-auto">
                    一通り作品を楽しんだあとは
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto">
                    スクリーンの左側にある出口から退場できます。
                  </v-row>
                  <v-row align="center" justify="center" class="mx-auto mt-4">
                    さて、次はどのブースをみようかな？
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
