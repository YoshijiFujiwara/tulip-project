import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene>
      <a-assets>
        <img id="floor" src="/assets/img/floor.jpg" />
        <img id="floor-NRM" src="/assets/img/floor.jpg" />
      </a-assets>

      <Entity
        primitive="a-plane"
        material={{
          color: '#FFFFFF',
          src: '#floor',
          repeat: '5 5',
          normalMap: '#floor-NRM',
          normalTextureRepeat: '5 5',
        }}
        rotation="-90 0 0"
        scale="10 10 1"
      ></Entity>
    </Scene>
  );
}
