<template>
  <a-scene background="color: #FFFFFF">
    <!-- Camera Rig -->
    <a-entity id="cam-rig" position="0 0 4">
      <!--Camera -->
      <a-camera look-controls="pointerLockEnabled: true">
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-plane color="#DDDDDD" shader="flat" rotation="-90 0 0" scale="8 16 1">
    </a-plane>

    <!-- Blue -->
    <a-box id="blue" color="#00AAFF" position="-2 3 -4"> </a-box>
    <!-- Yellow -->
    <a-box id="yellow" color="#FFAA00" position="-2 0.5 -4"> </a-box>

    <!-- Green -->
    <a-box id="green" color="#00AA00" position="2 3 -4"> </a-box>
    <!-- Red -->
    <a-box id="red" material="color: #AA0000" position="2 0.5 -4"> </a-box>
  </a-scene>
</template>

<script>
export default {
  layout: 'aframe_sandbox',
  auth: false,
  mounted() {
    /* THE JAVASCRIPT IN THE <script> TAG BEFORE <a-scene> DOES NOT WORK
function randomColor() {
	var red = document.querySelector('#red');
	var randomHEX = '#' + Math.random().toString(16).substr(-6);
	// credit: http://stackoverflow.com/a/7638362

	red.setAttribute('material', 'color', randomHEX);
}
*/

    /* IF YOU MOVE IT AFTER </a-scene>, YOU NEED TO WAIT FOR THE SCENE TO LOAD
function randomColor() {
	var red = document.querySelector('#red');
	var randomHEX = '#' + Math.random().toString(16).substr(-6);
	// credit: http://stackoverflow.com/a/7638362

	red.setAttribute('material', 'color', randomHEX);
}

var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
	randomColor();
} else {
	scene.addEventListener('loaded', randomColor);
}
*/

    window.AFRAME.registerComponent('random-color', {})
  },
}
</script>
