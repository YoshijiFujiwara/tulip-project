<template>
  <div>
    <a-scene
      inspector=""
      keyboard-shortcuts=""
      screenshot=""
      vr-mode-ui=""
      device-orientation-permission-ui=""
      ><a-assets timeout="20000"
        ><a-asset-item
          id="gym-obj"
          src="/vr/model/fabric_booth.obj"
        ></a-asset-item
      ></a-assets>
      <a-obj-model
        src="#gym-obj"
        obj-model=""
        material=""
        visible=""
      ></a-obj-model>
      <div class="a-loader-title" style="display: none">
        frontend - frontend
      </div></a-scene
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class ElegantModel extends Vue {}
</script>
