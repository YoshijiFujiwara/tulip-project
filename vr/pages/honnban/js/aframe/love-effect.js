AFRAME.registerComponent('love-effect', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var loveEl = document.querySelector('#i-love');
      loveEl.setAttribute('sound', 'src: #assets-applause-effect; volume:2');
      loveEl.components.sound.playSound();
    });
  },
});