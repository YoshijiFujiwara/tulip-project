<template>
  <a-scene renderer="antialias: true">
    <!-- Image -->
    <a-image
      src="/vr/img/aa.jpg"
      position="0 1.5 -8"
      height="0.75"
      scale="6 6 1"
      animation="property: rotation; from: 0 15 0; to: 0 -15 0; loop: true;
                            dir: alternate; dur: 3000; easing: linear"
    >
    </a-image>

    <!-- Sphere -->
    <a-sphere color="#AA0000" radius="0.75" position="0 0.5 -5"></a-sphere>
  </a-scene>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
  layout: 'aframe_sandbox',
})
export default class Index extends Vue {}
</script>
