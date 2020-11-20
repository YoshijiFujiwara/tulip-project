<template>
  <div>
    <a-scene>
      <a-assets timeout="20000">
        <a-asset-item id="gym-obj" src="/vr/model/booth_3x3.obj"></a-asset-item>
      </a-assets>
      <a-obj-model
        position="5 0 0"
        rotation="270 0 0"
        src="#gym-obj"
      ></a-obj-model>
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
