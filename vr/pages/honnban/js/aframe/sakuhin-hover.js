AFRAME.registerComponent('sakuhin-hover', {
  init: function () {
    var sakuhinEl = document.querySelector('#i-sakuhin');
    sakuhinEl.addEventListener('mouseenter', function (evt) {
      sakuhinEl.setAttribute('scale', {x: 0.35, y: 0.8, z: 1.0});
      sakuhinEl.setAttribute('position', {x: -0.349, y: 0.327, z: 0.025});
    });
    sakuhinEl.addEventListener('mouseleave', function (evt) {
      sakuhinEl.setAttribute('scale', {x: 0.3, y: 0.740, z: 0.849});
      sakuhinEl.setAttribute('position', {x: -0.349, y: 0.327, z: 0.025});
    });
  },
});