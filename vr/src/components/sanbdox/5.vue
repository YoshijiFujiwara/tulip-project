<template>
  <a-scene renderer="colorManagement: true">
    <a-assets timeout="200000">
      <img id="sky" src="../../assets/img/clear-sunny-sky.jpg" />
      <a-asset-item
        id="castle_village"
        src="../../assets/model/castle_village/scene.gltf"
      ></a-asset-item>
    </a-assets>

    <!-- Sky -->
    <a-sky src="#sky"></a-sky>

    <!-- Camera -->
    <a-entity position="-20 0 0">
      <a-camera></a-camera>
    </a-entity>

    <!-- Using the asset management system. -->
    <a-entity gltf-model="#castle_village"></a-entity>
    <!-- <a-gltf-model src="#castle_village"></a-gltf-model> -->
  </a-scene>
</template>

<script>
export default {};
</script>
