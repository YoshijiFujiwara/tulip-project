<template>
  <div>
    <a-scene>
      <a-assets timeout="20000">
        <a-asset-item id="gym-obj" src="/gym.obj"></a-asset-item>
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
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  auth: false,
})
export default class Index extends Vue {}
</script>
