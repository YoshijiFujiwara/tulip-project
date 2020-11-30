import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene renderer="colorManagement: true">
      <a-assets timeout="200000">
        <img id="sky" src="/assets/img/clear-sunny-sky.jpg" />
        <a-asset-item
          id="castle_village"
          src="/assets/model/castle_village/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-sky src="#sky"></a-sky>

      <Entity position="-20 0 0">
        <Entity primitive="a-camera" />
      </Entity>

      <Entity gltf-model="#castle_village"></Entity>
    </Scene>
  );
}
