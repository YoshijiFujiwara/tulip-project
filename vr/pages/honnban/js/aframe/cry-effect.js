AFRAME.registerComponent('cry-effect', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var cryl = document.querySelector('#i-cry');
      cryl.setAttribute('sound', 'src: #assets-subtle-effect; volume:2');
      cryl.components.sound.playSound();
    });
  },
});