<template>
  <div>
    <a-scene>
      <a-assets timeout="200000">
        <a-asset-item id="room-obj" src="/vr/model/room.obj"></a-asset-item>
        <a-asset-item id="room-mtl" src="/vr/model/room.mtl"></a-asset-item>
      </a-assets>
      <a-obj-model src="#room-obj" mtl="room-mtl"></a-obj-model>
      <a-sky color="#000"></a-sky>
      colorManagement: true
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class ElegantModel extends Vue {}
</script>
