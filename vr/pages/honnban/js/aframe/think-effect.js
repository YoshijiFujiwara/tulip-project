AFRAME.registerComponent('think-effect', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var thinkEl = document.querySelector('#i-think');
      thinkEl.setAttribute('sound', 'src: #assets-hum-effect; volume:2');
      thinkEl.components.sound.playSound();
    });
  },
});