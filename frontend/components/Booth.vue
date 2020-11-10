<template>
  <!-- spanとかdivで囲むと表示されなくなる -->
  <a-entity>
    <a-box width="0.2" height="6" depth="4" :position="booth.rightWall"></a-box>
    <a-box width="7" height="6" depth="0.2" :position="booth.backWall"></a-box>
    <a-box
      :src="`#${booth.name}`"
      width="7"
      height="6"
      depth="0.2"
      :position="booth.imgPosition"
    ></a-box>
    <a-box width="0.2" height="6" depth="4" :position="booth.leftWall"></a-box>
  </a-entity>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Booth extends Vue {
  @Prop({ required: true }) booth!: object
}
</script>
