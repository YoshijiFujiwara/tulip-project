  AFRAME.registerComponent('heart-hover', {
    init: function () {
      var whiteheartEl = document.querySelector('#white-like');
      var curorEl = document.querySelector('#cursor-item');
      whiteheartEl.addEventListener('mouseenter', function () {
        curorEl.setAttribute('material', 'color: #00acff');
        whiteheartEl.setAttribute('scale', {x: 0.02, y: 0.02, z: 0.02});
      });
      whiteheartEl.addEventListener('mouseleave', function () {
        curorEl.setAttribute('material', 'color: #ffffff');
        whiteheartEl.setAttribute('scale', {x: 0.015, y: 0.015, z: 0.015});
      });
    },
  });