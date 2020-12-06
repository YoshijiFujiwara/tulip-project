window.AFRAME.registerComponent('play', {
  init() {
    const myEl = document.querySelector('#yellow');
    this.el.addEventListener('click', function () {
      myEl.components.sound.playSound();
    });
  },
});
window.AFRAME.registerComponent('stop', {
  init() {
    const myEl = document.querySelector('#yellow');
    this.el.addEventListener('click', function () {
      myEl.components.sound.stopSound();
    });
  },
});
