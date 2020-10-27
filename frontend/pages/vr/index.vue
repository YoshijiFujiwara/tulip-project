<template>
  <div>
    <a-scene>
      <a-assets>
        <a-asset-item id="gym-obj" src="../../assets/gym.obj"></a-asset-item>
      </a-assets>
      <a-obj-model position="0 0.5 -5" src="#gym-obj"></a-obj-model>
    </a-scene>
  </div>
</template>

<script lang="ts">
export default {}
</script>
