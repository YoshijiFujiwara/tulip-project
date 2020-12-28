AFRAME.registerComponent('sakuhin-hover', {
  init: function () {
    var sakuhinEl = document.querySelector('#i-sakuhin');
    sakuhinEl.addEventListener('mouseenter', function (evt) {
      sakuhinEl.setAttribute('scale', {x: 0.4, y: 0.4, z: 0.4});
      sakuhinEl.setAttribute('position', {x: -0.283, y: 0.76181, z: 0});
    });
    sakuhinEl.addEventListener('mouseleave', function (evt) {
      sakuhinEl.setAttribute('scale', {x: 0.3, y: 0.3, z: 0.3});
      sakuhinEl.setAttribute('position', {x: -0.283, y: 0.63654, z: 0});
    });
  },
});