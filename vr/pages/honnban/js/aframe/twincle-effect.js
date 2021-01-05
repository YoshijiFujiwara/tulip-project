AFRAME.registerComponent('twincle-effect', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var twincleEl = document.querySelector('#i-twincle');
      twincleEl.setAttribute('sound', 'src: #assets-wow-effect; volume:2');
      twincleEl.components.sound.playSound();
    });
  },
});