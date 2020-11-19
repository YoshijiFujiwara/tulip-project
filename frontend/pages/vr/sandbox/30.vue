<template>
  <a-scene background="color: FFFFFF" inspector-plugin-recast>
    <!-- Asset Management System -->
    <a-assets timeout="200000">
      <a-asset-item id="navmesh" src="/vr/model/navmesh.gltf"></a-asset-item>
      <a-asset-item
        id="my-navmesh"
        src="/vr/model/my-navmesh.gltf"
      ></a-asset-item>
    </a-assets>

    <!-- Camera Rig -->
    <a-entity id="cam-rig" position="0 0 6">
      <!-- Camera -->
      <a-camera id="head"></a-camera>
      <!-- Teleport Controls -->
      <a-entity
        teleport-controls="cameraRig: #cam-rig;
										 teleportOrigin: #head;
										 collisionEntities: #ground"
        gearvr-controls
        oculus-go-controls
      >
      </a-entity>
    </a-entity>

    <!-- Ground -->
    <a-plane color="#DDDDDD" shader="flat" rotation="-90 0 0" scale="8 16 1">
    </a-plane>
    <!-- NavMesh -->
    <a-entity
      id="ground"
      gltf-model="#my-navmesh"
      position="0 0.001 0"
      visible="false"
    >
    </a-entity>

    <!-- Placeholders -->
    <a-cylinder color="#FFAA00" radius="0.5" position="0 0.5 0"></a-cylinder>
    <a-cylinder color="#0077FF" radius="2" position="0 0.5 -4.5"></a-cylinder>
  </a-scene>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Index extends Vue {}
</script>
