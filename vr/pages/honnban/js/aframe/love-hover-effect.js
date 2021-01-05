AFRAME.registerComponent('reaction-love-hover', {
  init: function () {
    var loveEl = document.querySelector('#i-love');
    loveEl.addEventListener('mouseenter', function (evt) {
      if(loveEl.getAttribute('visible') === true) {
        loveEl.setAttribute('sound', 'src: #assets-hover-effect; volume:2');
        loveEl.components.sound.playSound();
      }
    });
  },
});