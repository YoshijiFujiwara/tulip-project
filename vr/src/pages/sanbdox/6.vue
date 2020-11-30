<template>
  <div>
    <a-scene renderer="colorManagement: true">
      <!-- Asset Management System -->
      <!-- **** IMPORTANT **** Due to the website policies, I cannot distribute the 3D models
                 that I use in the video. Please download the 3D models yourself, or use your own,
                 and then move them to the ASSETs folder -->
      <a-assets timeout="2000000">
        <img id="sky" src="../../assets/img/clear-sunny-sky.jpg" />
        <a-asset-item
          id="classroom"
          src="/vr/model/classroom/scene.gltf"
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
  </div>
</template>

<script>
export default {};
</script>
