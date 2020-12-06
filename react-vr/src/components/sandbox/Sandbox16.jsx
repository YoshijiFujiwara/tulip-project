import useScript from '../../hooks/useScript';

export default function Sandbox() {
  useScript(
    null,
    `
  AFRAME.registerComponent('play', {
    init() {
      const myEl = document.querySelector('#yellow')
      this.el.addEventListener('click', function () {
        myEl.components.sound.playSound()
      })
    },
  })
  AFRAME.registerComponent('stop', {
    init() {
      const myEl = document.querySelector('#yellow')
      this.el.addEventListener('click', function () {
        myEl.components.sound.stopSound()
      })
    },
  })
  `
  );

  return (
    <a-scene>
      <a-assets>
        <img id="ground" src="/assets/img/floor.jpg" />
        <audio id="sound_mozart1" src="/assets/music/mozart1.mp3"></audio>
        <audio id="sound_verdi" src="/assets/music/verdi.mp3"></audio>
        <img id="panorama" src="/assets/img/360-panorama.jpg" />
        <audio
          id="ambience_sound"
          src="/assets/music/japanese_nightingale_1.mp3"
        ></audio>
      </a-assets>

      <a-entity position="0 0 7">
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>

      <a-plane
        src="#ground"
        scale="40 40 1"
        repeat="2 2"
        rotation="-90 0 0"
      ></a-plane>

      <a-cylinder
        color="#0088FF"
        height="5"
        position="-2 2.5 0"
        sound="src: #sound_mozart1;
        				   on: click;
        				   volume: 1;
        				   refDistance: 4;
        				   rolloffFactor: 4"
      >
        <a-entity
          sound="src: #sound_mozart1; autoplay: false"
          position="1.396 1.525 0"
        ></a-entity>
      </a-cylinder>

      <a-box
        id="yellow"
        color="#FFAA00"
        position="1.5 0.5 0.5"
        sound="src: #sound_verdi"
      >
        <a-sphere
          color="#00AA00"
          radius="0.25"
          position="-0.5 1 0"
          play
        ></a-sphere>
        <a-sphere
          color="#AA0000"
          radius="0.25"
          position="0.5 1 0"
          stop
        ></a-sphere>
      </a-box>

      <a-sky
        src="#panorama"
        sound="src: #ambience_sound; autoplay: true; loop: true; positional: false"
      ></a-sky>
    </a-scene>
  );
}
