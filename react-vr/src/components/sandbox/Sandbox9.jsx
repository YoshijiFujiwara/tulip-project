import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene>
      <a-camera>
        <a-entity
          cursor
          position="0 0 -1"
          geometry="primitive: sphere; radius: 0.005"
          material="color: #FFFFFF; shader: flat; opacity: 0.5"
        ></a-entity>
      </a-camera>

      <a-sky color="#212121"></a-sky>

      <a-box color="#AA0000" position="-2 0 -7"></a-box>

      <a-box color="#AA0000" position="0 0 -7"></a-box>

      <a-box color="#AA0000" position="2 0 -7"></a-box>
    </Scene>
  );
}
