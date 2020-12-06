export default function Sandbox() {
  return (
    <a-scene renderer="antialias: true">
      <a-image
        src="/assets/img/aa.jpg"
        position="0 1.5 -8"
        height="0.75"
        scale="6 6 1"
        animation="property: rotation; from: 0 15 0; to: 0 -15 0; loop: true;
                            dir: alternate; dur: 3000; easing: linear"
      ></a-image>

      <a-sphere color="#AA0000" radius="0.75" position="0 0.5 -5"></a-sphere>
    </a-scene>
  );
}
