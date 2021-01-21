<template>
  <v-container align="center" justify="center">
    <v-row align="center" justify="center">
      <v-col cols="12" align="center">
        <span class="text-h2 bg-7769d1 mr-5">１</span>
        <span class="text-h2">基本操作編</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4" align="center">
        <v-img
          width="467"
          height="345"
          :src="require('@/assets/firstBasic_wasd.png')"
        />
        <div>
          <p>「W」… 前進</p>
          <p>「A」… 左　</p>
          <p>「S」… 後退</p>
          <p>「D」… 右　</p>
        </div>
      </v-col>
      <v-col cols="4" align="center">
        <v-img
          width="467"
          height="345"
          :src="require('@/assets/firstBasic_smart.jpeg')"
        />
        <p class="py-10">スマホは<br />画面左下の移動スティックを使用</p>
      </v-col>
      <v-col cols="4" align="center">
        <v-img
          width="467"
          height="345"
          :src="require('@/assets/firstBasic_click.png')"
        />
        <p class="py-10">
          クリック 又は タップ<br />できる場所はカーソルの色が<br />青色に変化します
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center">
        <span class="red--text text-h5"
          >※VR画面では音が出ますので音量にはご注意ください</span
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>

<style>
.bg-7769d1 {
  background-color: #7769d1;
  border-radius: 5px;
}
</style>
