<template>
  <div>
    <a-scene>
      <a-sky color="#24caff"></a-sky>
      <a-assets>
        <img id="texture" src="/vr/img/texture.jpg" />
      </a-assets>
      <a-box
        width="1"
        height="2"
        depth="50"
        position="-1 1.5 -27"
        src="#texture"
        repeat="1 1"
        rotation="0 -2 0"
        color="#ccc"
      ></a-box>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Texture extends Vue {}
</script>
