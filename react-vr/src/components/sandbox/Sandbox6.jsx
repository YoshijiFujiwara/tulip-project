import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene renderer="colorManagement: true">
      <a-assets timeout="200000">
        <img id="sky" src="/assets/img/clear-sunny-sky.jpg" />
        <a-asset-item
          id="classroom"
          src="/assets/model/classroom/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <Entity primitive="a-sky" src="#sky"></Entity>

      <Entity position="0 10 0">
        <Entity primitive="a-camera" />
      </Entity>

      <Entity primitive="a-gltf-model" src="#classroom"></Entity>
    </Scene>
  );
}
