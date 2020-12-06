export default function Sandbox() {
  return (
    <a-scene background="color: #FFFFFF">
      <a-entity id="cam-rig" position="0 0 4">
        <a-camera look-controls="pointerLockEnabled: true">
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>

      <a-plane
        color="#DDDDDD"
        shader="flat"
        rotation="-90 0 0"
        scale="8 16 1"
      ></a-plane>

      <a-box id="blue" color="#00AAFF" position="-2 3 -4"></a-box>
      <a-box id="yellow" color="#FFAA00" position="-2 0.5 -4"></a-box>

      <a-box id="green" color="#00AA00" position="2 3 -4"></a-box>
      <a-box id="red" material="color: #AA0000" position="2 0.5 -4"></a-box>
    </a-scene>
  );
}
