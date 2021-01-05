AFRAME.registerComponent('reaction-smile-hover', {
  init: function () {
    var smileEl = document.querySelector('#i-smile');
    smileEl.addEventListener('mouseenter', function (evt) {
      if(smileEl.getAttribute('visible') === true) {
        smileEl.setAttribute('sound', 'src: #assets-hover-effect; volume:2');
        smileEl.components.sound.playSound();
      }
    });
  },
});