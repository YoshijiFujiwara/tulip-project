<template>
  <v-container align="center" justify="center">
    <v-row
      align="center"
      justify="center"
      :class="_isPC ? 'text-h3 mt-6' : _isSP ? 'text-h5 mt-3' : ''"
      style="font-color: #ffffff"
    >
      <v-icon :size="_isPC ? 70 : _isSP ? 35 : 100" color="purple darken-2">
        mdi-numeric-1-box
      </v-icon>
      基本操作編
    </v-row>
    <v-row
      justify="center"
      :class="_isPC ? 'text-h5 mt-9' : 'text-h5'"
      style="line-height: 180%"
    >
      <v-col :cols="_isPC ? 4 : 12" align="center">
        <v-img
          width="467"
          height="345"
          contain
          :src="
            _isPC
              ? require('@/assets/firstBasic_wasd.png')
              : require('@/assets/joystick-base.png')
          "
        />
        <div>
          <p>
            「W」… 前進
            <br />「A」… 左&nbsp; <br />「S」… 後退 <br />「D」… 右&nbsp;
          </p>
        </div>
      </v-col>
      <v-col :cols="_isPC ? 4 : 12" align="center">
        <v-img
          width="467"
          height="345"
          :src="require('@/assets/firstBasic_smart.jpeg')"
        />
        <p class="py-10">
          スマホは
          <br />画面左下の移動スティックを使用
        </p>
      </v-col>
      <v-col :cols="_isPC ? 4 : 12" align="center">
        <v-img
          width="467"
          height="345"
          :src="require('@/assets/firstBasic_click.png')"
        />
        <p class="py-10">
          クリック 又は タップ
          <br />できる場所はカーソルの色が <br />青色に変化します
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
