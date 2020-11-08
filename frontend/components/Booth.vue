<template>
  <!-- spanとかdivで囲むと表示されなくなる -->
  <a-image
    :src="`#${img.name}`"
    width="6"
    height="6"
    :position="img.position"
  ></a-image>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Booth extends Vue {
  @Prop({ required: true }) img!: object
}
</script>
