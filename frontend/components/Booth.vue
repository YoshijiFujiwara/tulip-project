<template>
  <!-- spanとかdivで囲むと表示されなくなる -->
  <a-entity sound="src: url(/music/step.mp3); autoplay: true">
    <a-box
      width="0.2"
      height="6"
      depth="4"
      :position="exhibit.rightWall"
    ></a-box>
    <a-box
      width="7"
      height="6"
      depth="0.2"
      :position="exhibit.backWall"
    ></a-box>
    <a-box
      :src="`#${exhibitId}`"
      width="7"
      height="6"
      depth="0.2"
      :position="exhibit.imgPosition"
    ></a-box>
    <a-box
      width="0.2"
      height="6"
      depth="4"
      :position="exhibit.leftWall"
    ></a-box>
  </a-entity>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Booth extends Vue {
  @Prop({ required: true }) exhibit!: object
  @Prop({ required: true }) exhibitId!: String
}
</script>
