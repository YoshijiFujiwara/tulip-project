AFRAME.registerComponent('booth-video-player-hover', {
  init: function () {
    const videocontrolsEl = document.querySelector('#video-controls');
    const curorEl = document.querySelector('#cursor-item');
    videocontrolsEl.addEventListener('mouseenter', function () {
      curorEl.setAttribute('material', 'color: #00acff');
      videocontrolsEl.setAttribute('scale', {x: 0.45, y: 0.45, z: 0.45});
    });
    videocontrolsEl.addEventListener('mouseleave', function () {
      curorEl.setAttribute('material', 'color: #ffffff');
      videocontrolsEl.setAttribute('scale', {x: 0.4, y: 0.4, z: 0.54});
    });
  },
});
