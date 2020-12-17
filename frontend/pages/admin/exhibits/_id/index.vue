<template>
  <div style="background-color: #f9f9f9; height: 100vh">
    <v-row>
      <v-col cols="7">
        <v-row>
          <v-col class="text-h3 font-weight-bold ml-12">titleが入る</v-col>
        </v-row>
        <v-row>
          <v-col class="pa-12">
            <v-carousel v-model="model">
              <v-carousel-item v-for="(color, i) in colors" :key="color">
                <v-sheet :color="color" height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">Slide {{ i + 1 }}</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row justify="center" align-content="center">
          <v-col cols="10 ">
            <v-img
              height="400"
              width="400"
              :src="require('@/assets/unnamed.png')"
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h4 font-weight-bold"> 作品説明 </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h6">
            作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る
            作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る
            作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る
            作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る
            作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る作品説明の説明が入る
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold"> 作成グループ </v-col>
          <v-col>グループ名が入る</v-col>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold"> グループリーダー </v-col>
          <v-col>リーダー名が入る</v-col>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold"> ジャンル </v-col>
          <v-col>ジャンル名が入る</v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExhibitApi from '../../../../plugins/axios/modules/exhibit'
import { Exhibit } from '../../../../types/exhibit'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {
  exhibits: Exhibit[] = []

  model = 0
  colors = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange']

  async created() {
    const exhibits = await ExhibitApi.getExhibits()
    this.exhibits = exhibits
  }
}
</script>

<style lang="scss"></style>
