AFRAME.registerComponent('reaction-cry-hover', {
  init: function () {
    var cryEl = document.querySelector('#i-cry');
    cryEl.addEventListener('mouseenter', function (evt) {
      if(cryEl.getAttribute('visible') === true) {
        cryEl.setAttribute('sound', 'src: #assets-hover-effect; volume:2');
        cryEl.components.sound.playSound();
      }
    });
  },
});