<template>
  <div>
    <a-scene>
      <a-assets timeout="200000">
        <a-asset-item id="shop-obj" src="/shop.obj"></a-asset-item>
        <a-asset-item id="shop-mtl" src="/shop.mtl"></a-asset-item>
      </a-assets>
      <a-obj-model
        v-for="(n, i) in 20"
        :key="i"
        :position="`${i * 10} -1 ${i % 2 == 0 ? 20 : 0}`"
        :rotation="`-90 0 ${i % 2 == 0 ? 180 : 0}`"
        src="#shop-obj"
        mtl="#shop-mtl"
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
export default class Shop extends Vue {}
</script>
