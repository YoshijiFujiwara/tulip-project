export default function Sandbox() {
  return (
    <a-scene entity-spawner>
      <a-entity position="0 0 8">
        <a-camera id="cam" look-controls="pointerLockEnabled: true">
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>

      <a-plane
        color="#484848"
        shader="flat"
        rotation="-90 0 0"
        scale="6 4 1"
      ></a-plane>

      <a-cylinder color="#FFAA00" radius="0.5" position="0 0.5 0"></a-cylinder>
    </a-scene>
  );
}
