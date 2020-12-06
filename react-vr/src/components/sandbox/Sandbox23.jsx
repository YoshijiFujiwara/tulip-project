export default function Sandbox() {
  return (
    <a-scene>
      <a-assets>
        <img id="int-ear" src="/assets/img/InternalEar.jpg" />
      </a-assets>

      <a-entity position="0 0 4">
        <a-camera></a-camera>
      </a-entity>

      <a-circle color="#DDDDDD" shader="flat" rotation="-90 0 0"></a-circle>

      <a-cylinder
        color="#AA0000"
        radius="0.5"
        height="0.5"
        position="0 0.25 0"
      ></a-cylinder>

      <a-image src="#int-ear" scale="3 3 1" position="0 2 0"></a-image>
    </a-scene>
  );
}
