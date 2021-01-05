  AFRAME.registerComponent('heart-hover', {
    init: function () {
      var whiteheartEl = document.querySelector('#white-like');
      whiteheartEl.addEventListener('mouseenter', function () {
        whiteheartEl.setAttribute('scale', {x: 0.02, y: 0.02, z: 0.02});
      });
      whiteheartEl.addEventListener('mouseleave', function () {
        whiteheartEl.setAttribute('scale', {x: 0.015, y: 0.015, z: 0.015});
      });
    },
  });