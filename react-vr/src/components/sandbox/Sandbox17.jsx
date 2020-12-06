import useScript from '../../hooks/useScript';

export default function Sandbox() {
  useScript(
    null,
    `
    AFRAME.registerComponent('play-pause', {
      init() {
        const myVideo = document.querySelector('#sample_movie')
        const videoControls = document.querySelector('#videoControls')
        this.el.addEventListener('click', function () {
          if (myVideo.paused) {
            myVideo.play()
            videoControls.setAttribute('src', '#pause')
          } else {
            myVideo.pause()
            videoControls.setAttribute('src', '#play')
          }
        })
      },
    })
  `
  );

  return (
    <a-scene>
      <a-assets>
        <img id="play" src="/assets/img/play.png" />
        <img id="pause" src="/assets/img/pause.png" />
        <video
          id="sample_movie"
          src="/assets/movie/sample1.mp4"
          loop="true"
        ></video>
      </a-assets>

      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>

      <a-video src="#sample_movie" width="8" height="4.5" position="0 3 -9">
        <a-image
          id="videoControls"
          src="#play"
          position="0 -3 0"
          scale="0.5 0.5 1"
          play-pause
        ></a-image>
      </a-video>
    </a-scene>
  );
}
