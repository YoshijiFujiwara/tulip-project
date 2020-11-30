import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene>
      <a-assets>
        <img id="floor" src="/assets/img/floor.jpg" />
        <img id="bloodhound" src="/assets/img/bloodhound.png" />
      </a-assets>

      <Entity
        primitive="a-plane"
        src="#floor"
        shader="flat"
        rotation="-90 0 0"
        scale="5 5 1"
      ></Entity>

      <Entity
        primitive="a-cylinder"
        color="#AA0000"
        radius="0.5"
        height="2"
        position="-2 1 0"
      ></Entity>

      <Entity
        primitive="a-box"
        color="#00AA00"
        height="2"
        depth="4"
        position="2 1 0"
      ></Entity>

      <Entity
        primitive="a-image"
        src="#bloodhound"
        scale="2 2 1"
        position="0 1 0"
      ></Entity>

      <Entity position="0 0 5">
        <Entity primitive="a-camera" active="false"></Entity>
      </Entity>

      <Entity position="0 -0.7 5">
        <Entity primitive="a-camera" active="true"></Entity>
      </Entity>

      <Entity position="0 5 5">
        <Entity primitive="a-camera" active="false"></Entity>
      </Entity>
    </Scene>
  );
}
