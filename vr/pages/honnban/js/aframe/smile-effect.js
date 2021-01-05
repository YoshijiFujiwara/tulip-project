AFRAME.registerComponent('smile-effect', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var smileEl = document.querySelector('#i-smile');
      smileEl.setAttribute('sound', 'src: #assets-laugh-effect; volume:2');
      smileEl.components.sound.playSound();
    });
  },
});