<template>
  <div>
    <a-scene>
      <a-assets timeout="200000">
        <a-asset-item id="room-obj" src="/vr/model/room.obj"></a-asset-item>
        <a-asset-item id="room-mtl" src="/vr/model/room.mtl"></a-asset-item>
      </a-assets>
      <a-obj-model
        position="0 -8 -2"
        rotation="0 360 0"
        src="#room-obj"
        mtl="room-mtl"
        scale="0.05 0.05 0.05"
      ></a-obj-model>
      <a-sky color="#000"></a-sky>
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
