import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene>
      <a-assets>
        <img id="floor" src="/assets/img/floor.jpg" />
        <img id="firefox" src="/assets/img/firefox-quantum-1024.png" />
        <a-asset-item id="room" src="/assets/model/room.gltf"></a-asset-item>
      </a-assets>

      <a-sky color="#212121"></a-sky>

      <a-plane
        src="#floor"
        rotation="-90 0 0"
        scale="10000 10000 1"
        repeat="1000 1000"
        shadow="receive: true"
      ></a-plane>

      <a-entity position="0 0 5">
        <a-camera></a-camera>
      </a-entity>

      <a-entity gltf-model="#room" shadow="receive: true"></a-entity>

      <a-image src="#firefox" scale="2 2 1" position="-2 3 -2.49"></a-image>

      <a-box
        color="#E0E0E0"
        scale="5 0.1 1"
        position="0 4 0"
        shadow="cast: true"
      ></a-box>

      <a-box
        color="#FFEB3B"
        scale="0.5 0.5 0.5"
        position="-1 1 0"
        shadow="cast: true"
        shader="flat"
        animation="property: rotation;
                              to: 0 360 0;
                              loop: true;
                              dur: 5000;
                              easing: linear"
      ></a-box>

      <a-box
        id="orange-box"
        color="#FF5722"
        scale="0.5 0.5 0.5"
        position="1 1 0"
        shadow="cast: true"
        animation__1="property: rotation;
                                 to: 0 360 0;
                                 loop: true;
                                 dur: 5000;
                                 easing: linear"
        animation__2="property: position;
                                 to: 1 1 -2;
                                 loop: true;
                                 dir: alternate;
                                 dur: 5000;
                                 easing: easeInOutCubic"
      ></a-box>

      <a-entity
        light="type: ambient;
                             intensity: 0.2"
      ></a-entity>

      <a-entity
        light="type: point;
                             intensity: 0.8;
                             distance: 10;
                             castShadow: true"
        position="0 2 1.5"
        animation="property: light.intensity;
                                 from: 0.8;
                                 to: 0;
                                 loop: true;
                                 dir: alternate;
                                 dur: 5000;
                                 easing: easeInOutCubic"
      ></a-entity>

      <a-entity
        light="type: spot;
                             target: #orange-box;
                             color: #C40070;
                             angle: 30;
                             penumbra: 0.1;
                             castShadow: true"
        position="0 3 1"
      ></a-entity>
    </Scene>
  );
}
