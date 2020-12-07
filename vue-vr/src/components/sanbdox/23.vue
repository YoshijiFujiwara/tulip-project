<template>
  <a-scene>
    <!-- Asset Management System -->
    <a-assets>
      <!-- IMAGE by Blausen.com staff (2014) | https://tinyurl.com/y9yymdot -->
      <img id="int-ear" src="/assets/img/InternalEar.jpg" />
    </a-assets>

    <!-- Camera Rig -->
    <a-entity position="0 0 4">
      <!-- Camera -->
      <a-camera></a-camera>
    </a-entity>

    <!-- Ground -->
    <a-circle color="#DDDDDD" shader="flat" rotation="-90 0 0"> </a-circle>

    <!-- Cylinder -->
    <a-cylinder color="#AA0000" radius="0.5" height="0.5" position="0 0.25 0">
    </a-cylinder>

    <!-- Internal Ear -->
    <a-image src="#int-ear" scale="3 3 1" position="0 2 0"> </a-image>
  </a-scene>
</template>

<script>
export default {};
</script>
