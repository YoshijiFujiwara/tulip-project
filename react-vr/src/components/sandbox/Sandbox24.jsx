export default function Sandbox() {
  return (
    <a-scene vr-mode-ui="enabled: false">
      <a-entity position="0 0 6">
        <a-entity
          camera
          position="0 1.6 0"
          look-controls="pointerLockEnabled: true"
          wasd-controls="acceleration: 50"
        >
          <a-cursor></a-cursor>
        </a-entity>
      </a-entity>

      <a-plane
        color="#DDDDDD"
        shader="flat"
        rotation="-90 0 0"
        scale="8 4 1"
      ></a-plane>

      <a-cylinder
        color="#AA0000"
        radius="0.5"
        position="1.5 0.5 0"
      ></a-cylinder>

      <a-box
        color="#00AA00"
        width="0.5"
        depth="3"
        position="-1.5 0.5 0"
      ></a-box>
    </a-scene>
  );
}
