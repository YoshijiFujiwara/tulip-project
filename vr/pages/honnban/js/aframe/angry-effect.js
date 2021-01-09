AFRAME.registerComponent('angry-effect', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var angryEl = document.querySelector('#i-angry');
      angryEl.setAttribute('sound', 'src: #assets-angry-effect; volume:0.07');
      angryEl.components.sound.playSound();
    });
  },
});