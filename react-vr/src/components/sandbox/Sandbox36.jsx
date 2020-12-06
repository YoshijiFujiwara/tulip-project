export default function Sandbox() {
  return (
    <a-scene background="color: #FFFFFF">
      <a-assets>
        <img id="footsteps" src="/assets/img/footsteps.png" />
      </a-assets>

      <a-box
        color="#AA0000"
        position="-3 0.5 4"
        class="clickable"
        blink-teleportation="pos: -2 0 4"
      ></a-box>

      <a-box
        color="#00AA00"
        position="3 0.5 4"
        class="clickable"
        blink-teleportation="pos: 2 0 4; hide: true"
      ></a-box>

      <a-box color="#FFAA00" position="-3 0.5 -4"></a-box>
      <a-image
        src="#footsteps"
        position="-3 2.5 -4"
        look-at="#camera"
        class="clickable"
        blink-teleportation="pos: -2 0 -4; hide: true"
      ></a-image>

      <a-box color="#0077FF" position="3 0.5 -4"></a-box>
      <a-image
        src="#footsteps"
        position="3 2.5 -4"
        look-at="#camera"
        class="clickable"
        blink-teleportation="pos: 2 0 -4"
      ></a-image>

      <a-plane
        color="#DDDDDD"
        shader="flat"
        rotation="-90 0 0"
        scale="16 16 1"
      ></a-plane>

      <a-entity id="cameraRig" position="0 0 12">
        <a-camera id="camera" wasd-controls-enabled="false">
          <a-cursor raycaster="objects: .clickable"></a-cursor>
        </a-camera>
      </a-entity>
    </a-scene>
  );
}
