<template>
  <div>
    <a-scene>
      <!-- Asset Management System -->
      <a-assets>
        <img id="360-panorama" src="/vr/img/360-panorama.jpg" />
      </a-assets>

      <!-- 360° Panorama -->
      <a-sky src="#360-panorama"></a-sky>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Index extends Vue {}
</script>
