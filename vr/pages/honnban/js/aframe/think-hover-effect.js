AFRAME.registerComponent('reaction-think-hover', {
  init: function () {
    var thinkEl = document.querySelector('#i-think');
    thinkEl.addEventListener('mouseenter', function (evt) {
      if(thinkEl.getAttribute('visible') === true) {
        thinkEl.setAttribute('sound', 'src: #assets-hover-effect; volume:2');
        thinkEl.components.sound.playSound();
      }
    });
  },
});