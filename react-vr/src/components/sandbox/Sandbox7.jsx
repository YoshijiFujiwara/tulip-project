import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <Scene>
      <a-assets>
        <img id="floor" src="/assets/img/floor.jpg" />
      </a-assets>

      <Entity
        primitive="a-plane"
        src="#floor"
        shader="flat"
        rotation="-90 0 0"
        scale="5 5 1"
      />

      <Entity position="0 0 8">
        <Entity primitive="a-camera" />
      </Entity>

      <Entity
        primitive="a-box"
        color="#AA0000"
        position="0 4 0"
        animation="property: rotation;
                          to: 0 360 0;
                          loop: true;
                          dur: 5000;
                          easing: linear"
      />

      <Entity
        position="0 4 0"
        animation="property: rotation;
                             to: 0 -360 0;
                             loop: true;
                             dur: 5000;
                             easing: linear"
      >
        <Entity
          primitive="a-box"
          color="#00AA00"
          position="2 0 0"
          animation="property: rotation;
                              to: 0 -360 0;
                              loop: true;
                              dur: 5000;
                              easing: linear"
        />
      </Entity>

      <Entity
        primitive="a-box"
        color="#FFAA00"
        position="0 0.5 0"
        animation="property: position;
                          from: -2 0.5 -2;
                          to: -2 0.5 2;
                          loop: true;
                          dir: alternate;
                          dur: 3000;
                          easing: easeInOutCubic"
      />

      <Entity
        primitive="a-box"
        color="#FFAA00"
        position="2 0.5 0"
        animation="property: scale;
                          to: 0.2 1 5;
                          loop: true;
                          dir: alternate;
                          dur: 3000;
                          easing: easeInOutElastic"
      />

      <Entity
        primitive="a-sphere"
        color="#0000AA"
        radius="0.5"
        position="0 2.25 0"
        animation="property: material.color;
                             from: #00AAFF;
                             to: #0000AA;
                             loop: true;
                             dir: alternate;
                             dur: 1500"
      />

      <Entity
        primitive="a-cone"
        color="#484848"
        position="0 0.5 0"
        animation="property: opacity;
                           from: 1;
                           to: 0;
                           loop: true;
                           dir: alternate;
                           dur: 1500"
      />
    </Scene>
  );
}
