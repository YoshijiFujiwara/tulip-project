export default function Sandbox() {
  return (
    <a-scene background="color: FFFFFF" inspector-plugin-recast>
      <a-assets timeout="200000">
        <a-asset-item
          id="navmesh"
          src="/assets/model/navmesh.gltf"
        ></a-asset-item>
        <a-asset-item
          id="my-navmesh"
          src="/assets/model/my-navmesh.gltf"
        ></a-asset-item>
      </a-assets>

      <a-entity id="cam-rig" position="0 0 6">
        <a-camera id="head"></a-camera>
        <a-entity
          teleport-controls="cameraRig: #cam-rig;
										 teleportOrigin: #head;
										 collisionEntities: #ground"
          gearvr-controls
          oculus-go-controls
        ></a-entity>
      </a-entity>

      <a-plane
        color="#DDDDDD"
        shader="flat"
        rotation="-90 0 0"
        scale="8 16 1"
      ></a-plane>
      <a-entity
        id="ground"
        gltf-model="#my-navmesh"
        position="0 0.001 0"
        visible="false"
      ></a-entity>

      <a-cylinder color="#FFAA00" radius="0.5" position="0 0.5 0"></a-cylinder>
      <a-cylinder color="#0077FF" radius="2" position="0 0.5 -4.5"></a-cylinder>
    </a-scene>
  );
}
