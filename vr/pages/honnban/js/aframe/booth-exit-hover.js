AFRAME.registerComponent('exit-hover', {
  init: function () {
    var exitEl = document.querySelector('#exit');
    var curorEl = document.querySelector('#cursor-item');
    exitEl.addEventListener('mouseenter', function (evt) {
      curorEl.setAttribute('material', 'color: #00acff');
      console.log('mouseenter');
    });
    exitEl.addEventListener('mouseleave', function (evt) {
      curorEl.setAttribute('material', 'color: #ffffff');
      console.log('mauseleave');
    });
  },
});