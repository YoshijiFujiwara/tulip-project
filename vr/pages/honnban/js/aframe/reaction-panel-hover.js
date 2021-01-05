AFRAME.registerComponent('reaction-panel-hover', {
  init: function () {
    var reactionEl = document.getElementsByClassName('reaction-panel');
    console.log(reactionEl);
    reactionEl.addEventListener('mouseenter', function (evt) {
      reactionEl.setAttribute('sound', 'src: #assets-click-effect; volume:2');
      reactionEl.components.sound.playSound();
      console.log("マウス");
    });
    reactionEl.addEventListener('mouseleave', function (evt) {
     console.log("マウス離れた");
    });
  },
});