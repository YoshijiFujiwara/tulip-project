export default function Sandbox() {
  return (
    <a-scene background="color: #FFFFFF">
      <a-assets>
        <img id="footsteps" src="/assets/img/footsteps.png" />
      </a-assets>

      <a-entity
        id="cam-rig"
        movement-controls="controls: checkpoint"
        checkpoint-controls="mode: animate"
      >
        <a-entity progressive-controls></a-entity>
      </a-entity>

      <a-plane
        color="#DDDDDD"
        shader="flat"
        rotation="-90 0 0"
        scale="10 40 1"
      ></a-plane>

      <a-curvedimage
        src="/assets/img/curved-image.jpg"
        position="-3 1.5 -16"
        scale="3 3 3"
        theta-length="90"
        theta-start="135"
        radius="0.707"
        height="0.833"
      ></a-curvedimage>
      <a-image
        src="#footsteps"
        position="-3 3.5 -16"
        checkpoint="offset: 0 -3.5 0"
        look-at="#cam-rig"
      ></a-image>

      <a-box color="#00AA00" position="3 0.5 -16"></a-box>
      <a-image
        src="#footsteps"
        position="3 2.5 -16"
        checkpoint="offset: -1 -2.5 0"
        look-at="#cam-rig"
      ></a-image>

      <a-box color="#FFAA00" position="-3 0.5 -8"></a-box>
      <a-image
        src="#footsteps"
        position="-3 2.5 -8"
        checkpoint="offset: 1 -2.5 0"
        look-at="#cam-rig"
      ></a-image>

      <a-box color="#AA0000" position="3 0.5 -8"></a-box>
      <a-image
        src="#footsteps"
        position="3 2.5 -8"
        checkpoint="offset: -1 -2.5 0"
        look-at="#cam-rig"
      ></a-image>
    </a-scene>
  );
}
