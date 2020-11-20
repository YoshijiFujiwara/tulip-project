<template>
  <a-scene>
    <!-- Cursor Primitive
		<a-camera>
			<a-cursor></a-cursor>
		</a-camera> -->

    <!-- Visible Raycaster
		<a-entity position="0 1.6 0" rotation="-12 0 0">
			<a-cursor raycaster="showLine: true">
			</a-cursor>
		</a-entity> -->

    <!-- Cursor Component -->
    <a-camera>
      <a-entity
        cursor
        position="0 0 -1"
        geometry="primitive: sphere; radius: 0.005"
        material="color: #FFFFFF; shader: flat; opacity: 0.5"
      >
      </a-entity>
    </a-camera>

    <a-sky color="#212121"></a-sky>

    <!-- Left Red Box -->
    <a-box color="#AA0000" position="-2 0 -7"> </a-box>

    <!-- Center Red Box -->
    <a-box color="#AA0000" position="0 0 -7"> </a-box>

    <!-- Right Red Box -->
    <a-box color="#AA0000" position="2 0 -7"> </a-box>
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
