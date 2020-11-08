<template>
  <div>
    <a-scene>
      <a-assets>
        <img id="my-image" src="/gori.jpg" />
      </a-assets>

      <a-image
        src="#my-image"
        width="6"
        height="6"
        position="12 0 -3"
        rotation="0 90 0"
      ></a-image>
      <a-image src="#my-image" width="6" height="6" position="15 0 0"></a-image>
      <a-image
        src="#my-image"
        width="6"
        height="6"
        position="18 0 -3"
        rotation="0 90 0"
      ></a-image>
      <a-sky color="#000"></a-sky>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Gorilla extends Vue {}
</script>
