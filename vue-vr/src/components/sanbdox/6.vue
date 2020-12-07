<template>
  <a-scene renderer="colorManagement: true">
    <a-assets timeout="200000">
      <img id="sky" src="/assets/img/clear-sunny-sky.jpg" />
      <a-asset-item
        id="classroom"
        src="/assets/model/classroom/scene.gltf"
      ></a-asset-item>
    </a-assets>

    <!-- Sky -->
    <a-sky src="#sky"></a-sky>

    <!-- Camera -->
    <a-entity position="0 10 0">
      <a-camera></a-camera>
    </a-entity>

    <!-- Using the asset management system. -->
    <a-gltf-model src="#classroom"></a-gltf-model>
  </a-scene>
</template>

<script>
export default {};
</script>
