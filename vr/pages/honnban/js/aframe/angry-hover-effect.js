AFRAME.registerComponent('reaction-angry-hover', {
  init: function () {
    var angryEl = document.querySelector('#i-angry');
    angryEl.addEventListener('mouseenter', function (evt) {
      if(angryEl.getAttribute('visible') === true) {
        angryEl.setAttribute('sound', 'src: #assets-hover-effect; volume:2');
        angryEl.components.sound.playSound();
     }
    });
  },
});