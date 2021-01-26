<template>
  <div>
    <v-row class="text-h3" justify="center" v-if="_isPC">本サービスについて</v-row>
    <v-row class="text-h5" justify="center" v-if="_isSP">本サービスについて</v-row>
    <v-row justify="center" v-if="_isPC">
      <v-col cols="2" align-center>
        <div style="border: solid 2px #7769d1"></div>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="_isSP">
      <v-col cols="6" align-center>
        <div style="border: solid 2px #7769d1"></div>
      </v-col>
    </v-row>
    <div class="mt-12 text-h4 text-center" v-if="_isPC">
      <v-row justify="center" style="line-height: 180%">
        コロナ渦に巻き込まれた今、
        <br />学校の文化祭が開催できなくなってしまいました。
        <br />そこで、少し先の未来では
        <br />「VRを使って開催するのが主になるのではないか？」
        <br />と考え、私たちのサービス
      </v-row>

      <v-row style="color: #7769d1" class="text-h3" justify="center">
        <span class="text-h4 pt-3 welcomeMainText--text">「</span>
        文
        <span class="text-h4 pt-3 welcomeMainText--text">化祭から始まるVR生活」が生まれました。</span>
      </v-row>
    </div>
    <div class="mt-12 text-h6 text-center" v-if="_isSP">
      <v-row justify="center" style="line-height: 180%">
        コロナ渦に巻き込まれた今、
        学校の文化祭が開催できなくなってしまいました。
        そこで、少し先の未来では
        「VRを使って開催するのが主になるのではないか？」
        と考え、私たちのサービス「
  <span style="color: #7769d1">文</span>
        化祭から始まるVR生活」が生まれました。
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>
