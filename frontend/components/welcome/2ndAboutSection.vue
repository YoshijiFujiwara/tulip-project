<template>
  <div :class="_isSP ? 'px-5' : ''">
    <v-row :class="_isPC ? 'text-h3' : _isSP ? 'text-h5' : ''" justify="center"
      >本サービスについて</v-row
    >
    <v-row v-if="_isPC" justify="center">
      <v-col cols="2" align-center>
        <div style="border: solid 2px #7769d1"></div>
      </v-col>
    </v-row>
    <v-row v-if="_isSP" justify="center">
      <v-col cols="6" align-center>
        <div style="border: solid 2px #7769d1"></div>
      </v-col>
    </v-row>
    <div v-if="_isPC" class="mt-12 text-h4 text-center">
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
        <span class="text-h4 pt-3 welcomeMainText--text"
          >化祭から始まるVR生活」が生まれました。</span
        >
      </v-row>
    </div>
    <div v-if="_isSP" class="mt-3 text-h6 text-center">
      <v-row justify="center" style="line-height: 180%">
        コロナ渦に巻き込まれた今、
        学校の文化祭が開催できなくなってしまいました。 そこで、少し先の未来では
        「VRを使って開催するのが主になるのではないか？」
        と考え、私たちのサービス「文化祭から始まるVR生活」が生まれました。
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Section extends Vue {}
</script>

<style lang="scss">
.second-wrap {
  display: block;
  position: relative;
  top: -20em;
}
</style>
