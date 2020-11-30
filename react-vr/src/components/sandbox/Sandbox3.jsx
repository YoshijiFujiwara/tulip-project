import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene>
      <a-assets>
        <img id="360-panorama" src="/assets/img/360-panorama.jpg" />
      </a-assets>

      <Entity primitive="a-sky" src="#360-panorama" />
    </Scene>
  );
}
