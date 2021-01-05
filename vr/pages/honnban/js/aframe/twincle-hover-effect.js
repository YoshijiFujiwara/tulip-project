AFRAME.registerComponent('reaction-twincle-hover', {
  init: function () {
    var twincleEl = document.querySelector('#i-twincle');
    twincleEl.addEventListener('mouseenter', function (evt) {
      if(twincleEl.getAttribute('visible') === true) {
        twincleEl.setAttribute('sound', 'src: #assets-hover-effect; volume:2');
        twincleEl.components.sound.playSound();
      }
    });
  },
});