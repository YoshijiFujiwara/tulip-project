AFRAME.registerComponent('reaction-panel-on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var sakuhinEl = document.querySelector('#love');
      sakuhinEl.setAttribute('sound', 'src: #assets-click-effect; volume:2');
      sakuhinEl.components.sound.playSound();
    });
  },
});