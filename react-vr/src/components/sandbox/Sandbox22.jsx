export default function Sandbox() {
  return (
    <a-scene>
      <a-assets>
        <img id="look-at-img" src="/assets/img/look_at.jpg" />
      </a-assets>

      <a-plane
        color="#E7E7E7"
        shader="flat"
        rotation="-90 0 0"
        scale="6 18 1"
      ></a-plane>

      <a-entity position="-4.5 0 0" rotation="0 -36 0">
        <a-camera id="cam">
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>

      <a-box
        id="blue"
        color="#00AAFF"
        position="-1.5 0.5 -6"
        animation="property: position;
						  to: -1.5 0.5 6;
						  dir: alternate;
						  easing: linear;
						  loop: true;
						  dur: 6000"
      >
        <a-image
          src="#look-at-img"
          position="0 1.5 0"
          height="0.75"
          look-at="#cam"
        ></a-image>
      </a-box>

      <a-box color="#FFAA00" position="1.5 0.5 -6" look-at="#blue">
        <a-entity
          position="0 1.5 0"
          look-at="#cam"
          text="value: LOOK-AT; color: #212121; align: center; wrapCount: 9"
          geometry="primitive: plane; width: auto; height: 0.5"
          material="color: #FFAA00; shader: flat; visible: true"
        ></a-entity>
      </a-box>
    </a-scene>
  );
}
