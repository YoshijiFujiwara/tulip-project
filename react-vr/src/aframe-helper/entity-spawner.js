window.AFRAME.registerComponent('entity-spawner', {
  init() {
    const camera = document.querySelector('#cam');
    const scene = document.querySelector('a-scene');

    this.el.addEventListener('click', function () {
      // eslint-disable-next-line no-undef
      const position = new THREE.Vector3();
      // eslint-disable-next-line no-undef
      const direction = new THREE.Vector3();
      // eslint-disable-next-line no-undef
      const target = new THREE.Vector3();

      camera.object3D.getWorldPosition(position);
      camera.object3D.getWorldDirection(direction);
      direction.multiplyScalar(-2);
      target.add(position).add(direction);

      const sphere = document.createElement('a-sphere');
      sphere.setAttribute('material', { color: '#0077FF', side: 'double' });
      sphere.setAttribute('radius', 0.25);
      sphere.setAttribute('position', target);

      scene.appendChild(sphere);
    });
  },
});
