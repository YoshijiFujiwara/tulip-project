<template>
  <!-- spanとかdivで囲むと表示されなくなる -->
  <a-box
    :src="`#${img.name}`"
    width="6"
    height="6"
    depth="6"
    :position="img.position"
  ></a-box>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Booth extends Vue {
  @Prop({ required: true }) img!: object
}
</script>
