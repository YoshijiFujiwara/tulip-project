// import 'aframe-randomizer-components';
// import 'aframe-particle-system-component';
import { Scene, Entity } from 'aframe-react';
import { useEffect } from 'react';
import useScript from '../hooks/useScript';

export default function NetWorkedSample() {
  useScript(
    null,
    `
  var isMobile = AFRAME.utils.device.isMobile();

    if (isMobile) {
      var particles = document.getElementById('particles');
      particles.parentNode.removeChild(particles);
    }
  `
  );
  useScript(
    null,
    `
    // Define custom schema for syncing avatar color, set by random-color
    NAF.schemas.add({
      template: '#avatar-template',
      components: [
        'position',
        'rotation',
        {
          selector: '.head',
          component: 'material',
          property: 'color'
        }
      ]
    });

    // Called by Networked-Aframe when connected to server
    function onConnect () {
      console.log("onConnect", new Date());
    }
  `
  );

  return (
    <Scene
      networked-scene="
      room: basic-audio;
      debug: true;
      adapter: webrtc;
      audio: true;
      serverURL: ws://localhost:8080;
    "
    >
      <a-assets timeout="69000">
        <img
          id="grid"
          src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png"
          crossorigin="anonymous"
          alt=""
        />
        <img
          id="sky"
          src="https://i.imgur.com/WqlqEkq.jpg"
          crossorigin="anonymous"
          alt=""
        />

        <template id="avatar-template">
          <a-entity class="avatar" networked-audio-source>
            <a-sphere
              class="head"
              color="#ffffff"
              scale="0.45 0.5 0.4"
            ></a-sphere>
            <a-entity class="face" position="0 0.05 0">
              <a-sphere
                class="eye"
                color="#efefef"
                position="0.16 0.1 -0.35"
                scale="0.12 0.12 0.12"
              >
                <a-sphere
                  class="pupil"
                  color="#000"
                  position="0 0 -1"
                  scale="0.2 0.2 0.2"
                ></a-sphere>
              </a-sphere>
              <a-sphere
                class="eye"
                color="#efefef"
                position="-0.16 0.1 -0.35"
                scale="0.12 0.12 0.12"
              >
                <a-sphere
                  class="pupil"
                  color="#000"
                  position="0 0 -1"
                  scale="0.2 0.2 0.2"
                ></a-sphere>
              </a-sphere>
            </a-entity>
          </a-entity>
        </template>
      </a-assets>

      <a-entity
        id="player"
        networked="template:#avatar-template;attachTemplateToLocal:false;"
        camera
        position="0 1.6 0"
        spawn-in-circle="radius:3"
        wasd-controls
        look-controls
      >
        <a-sphere class="head" visible="false"></a-sphere>
      </a-entity>

      <a-entity
        position="0 0 0"
        geometry="primitive: plane; width: 10000; height: 10000;"
        rotation="-90 0 0"
        material="src: #grid; repeat: 10000 10000; transparent: true; metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"
      ></a-entity>

      <a-entity
        light="color: #ccccff; intensity: 1; type: ambient;"
        visible=""
      ></a-entity>
      <a-entity
        light="color: #ffaaff; intensity: 1.5"
        position="5 5 5"
      ></a-entity>

      <a-sky src="#sky" rotation="0 -90 0"></a-sky>
      <a-entity id="particles" particle-system="preset: snow"></a-entity>
    </Scene>
  );
}
