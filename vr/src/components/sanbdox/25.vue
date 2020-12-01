<template>
  <a-scene background="color: #FFFFFF" inspector-plugin-recast>
    <!-- Asset Management System -->
    <a-assets>
      <a-asset-item
        id="my-nav-mesh"
        src="../../assets/model/navmesh.gltf"
      ></a-asset-item>
    </a-assets>

    <!-- Camera Rig -->
    <a-entity
      movement-controls="speed: 0.15; constrainToNavMesh: true"
      position="0 0 2"
    >
      <!-- Camera -->
      <a-entity
        camera
        position="0 1.6 0"
        look-controls="pointerLockEnabled: true"
      >
        <a-cursor></a-cursor>
      </a-entity>
    </a-entity>

    <!-- Ground -->
    <a-plane color="#333333" shader="flat" rotation="-90 0 0" scale="8 6 1">
    </a-plane>
    <!-- Navigation Mesh -->
    <a-entity
      gltf-model="#my-nav-mesh"
      nav-mesh
      position="0 -0.1 0"
      visible="false"
    >
    </a-entity>

    <!-- Cylinder -->
    <a-cylinder color="#AA0000" radius="0.5" position="1.5 0.5 0"> </a-cylinder>

    <!-- Box -->
    <a-box color="#00AA00" width="0.5" depth="3" position="-1.5 0.5 0"> </a-box>
  </a-scene>
</template>

<script>
export default {};
</script>
