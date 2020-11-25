<template>
  <a-scene entity-spawner>
    <!-- Camera Rig -->
    <a-entity position="0 0 8">
      <!-- Camera -->
      <a-camera id="cam" look-controls="pointerLockEnabled: true">
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-plane color="#484848" shader="flat" rotation="-90 0 0" scale="6 4 1">
    </a-plane>

    <!-- Cylinder -->
    <a-cylinder color="#FFAA00" radius="0.5" position="0 0.5 0"> </a-cylinder>
  </a-scene>
</template>

<script>
export default {
  layout: 'aframe_sandbox',
  auth: false,
  mounted() {
    window.AFRAME.registerComponent('entity-spawner', {
      init() {
        const camera = document.querySelector('#cam')
        const scene = document.querySelector('a-scene')

        this.el.addEventListener('click', function () {
          // eslint-disable-next-line no-undef
          const position = new THREE.Vector3()
          // eslint-disable-next-line no-undef
          const direction = new THREE.Vector3()
          // eslint-disable-next-line no-undef
          const target = new THREE.Vector3()

          camera.object3D.getWorldPosition(position)
          camera.object3D.getWorldDirection(direction)
          direction.multiplyScalar(-2)
          target.add(position).add(direction)

          const sphere = document.createElement('a-sphere')
          sphere.setAttribute('material', { color: '#0077FF', side: 'double' })
          sphere.setAttribute('radius', 0.25)
          sphere.setAttribute('position', target)

          scene.appendChild(sphere)
        })
      },
    })
  },
}
</script>
