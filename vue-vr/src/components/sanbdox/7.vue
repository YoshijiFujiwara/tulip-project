<template>
  <a-scene>
    <!-- Asset Management System -->
    <a-assets>
      <img id="floor" src="/assets/img/floor.jpg" />
    </a-assets>

    <!-- Ground -->
    <a-plane src="#floor" shader="flat" rotation="-90 0 0" scale="5 5 1">
    </a-plane>

    <!-- Camera -->
    <a-entity position="0 0 8">
      <a-camera></a-camera>
    </a-entity>

    <!-- Rotating Box -->
    <a-box
      color="#AA0000"
      position="0 4 0"
      animation="property: rotation;
                          to: 0 360 0;
                          loop: true;
                          dur: 5000;
                          easing: linear"
    >
    </a-box>

    <!-- Orbiting and Revolving Box -->
    <a-entity
      position="0 4 0"
      animation="property: rotation;
                             to: 0 -360 0;
                             loop: true;
                             dur: 5000;
                             easing: linear"
    >
      <a-box
        color="#00AA00"
        position="2 0 0"
        animation="property: rotation;
                              to: 0 -360 0;
                              loop: true;
                              dur: 5000;
                              easing: linear"
      >
      </a-box>
    </a-entity>

    <!-- Moving Box -->
    <!-- ALl the new easing functions are available here:
             https://aframe.io/docs/1.0.0/components/animation.html#easings -->
    <a-box
      color="#FFAA00"
      position="0 0.5 0"
      animation="property: position;
                          from: -2 0.5 -2;
                          to: -2 0.5 2;
                          loop: true;
                          dir: alternate;
                          dur: 3000;
                          easing: easeInOutCubic"
    >
    </a-box>

    <!-- Scaling Box -->
    <!-- ALl the new easing functions are available here:
             https://aframe.io/docs/1.0.0/components/animation.html#easings -->
    <a-box
      color="#FFAA00"
      position="2 0.5 0"
      animation="property: scale;
                          to: 0.2 1 5;
                          loop: true;
                          dir: alternate;
                          dur: 3000;
                          easing: easeInOutElastic"
    >
    </a-box>

    <!-- Animated Color -->
    <a-sphere
      color="#0000AA"
      radius="0.5"
      position="0 2.25 0"
      animation="property: material.color;
                             from: #00AAFF;
                             to: #0000AA;
                             loop: true;
                             dir: alternate;
                             dur: 1500"
    >
    </a-sphere>

    <!-- Animated Opacity -->
    <a-cone
      color="#484848"
      position="0 0.5 0"
      animation="property: opacity;
                           from: 1;
                           to: 0;
                           loop: true;
                           dir: alternate;
                           dur: 1500"
    >
    </a-cone>
  </a-scene>
</template>

<script>
export default {};
</script>
