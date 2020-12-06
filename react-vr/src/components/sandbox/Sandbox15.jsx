export default function Sandbox() {
  return (
    <a-scene physics="gravity: -9.8; restitution: 0.7">
      <a-assets>
        <img id="ground" src="/assets/img/floor.jpg" />
      </a-assets>
      <a-entity progressive-controls position="0 0 5"></a-entity>

      <a-plane
        src="#ground"
        scale="50 50 1"
        repeat="5 5 1"
        rotation="-90 0 0"
        static-body
      ></a-plane>

      <a-box color="#AA0000" position="-3.5 0.5 -4">
        <a-box
          color="#AA0000"
          visible="false"
          scale="2 3 1.5"
          position="0 1 0"
          static-body
        ></a-box>
      </a-box>

      <a-sphere
        color="#00AA00"
        radius="0.5"
        position="-1 4 -4"
        grabbable
        dynamic-body="linearDamping: 0.05; mass: 1"
      ></a-sphere>

      <a-sphere
        color="#FFAA00"
        radius="0.5"
        position="1 4 -4"
        grabbable
        dynamic-body="linearDamping: 0.5; angularDamping: 0.3; mass: 10"
      ></a-sphere>

      <a-box
        color="#00AAFF"
        position="3.5 2 -4"
        static-body="shape: sphere; sphereRadius: 1"
        event-set__color="_event: collide; material.color: #0055AA"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"
      ></a-box>
    </a-scene>
  );
}
