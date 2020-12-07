<template>
  <a-scene>
    <!-- Asset Management System -->
    <a-assets>
      <img id="floor" src="/assets/img/floor.jpg" />
      <img id="firefox" src="/assets/img/firefox-quantum-1024.png" />
      <a-asset-item id="room" src="/assets/model/room.gltf"></a-asset-item>
    </a-assets>

    <!-- Default Lighting In The A-Frame Scene -->
    <!-- 1 Ambient Light
            <a-entity light="type: ambient;
                             color: #BBB">
            </a-entity> -->
    <!-- 1 Directional Light
            <a-entity light="type: directional;
                             color: #FFFFFF;
                             intensity: 0.6;
                             castShadow: true"
                      position="-0.5 1 1">
            </a-entity> -->

    <!-- Sky -->
    <a-sky color="#212121"></a-sky>

    <!-- Ground -->
    <a-plane
      src="#floor"
      rotation="-90 0 0"
      scale="10000 10000 1"
      repeat="1000 1000"
      shadow="receive: true"
    >
    </a-plane>

    <!-- Camera -->
    <a-entity position="0 0 5">
      <a-camera></a-camera>
    </a-entity>

    <!-- Blue Room | x = 4m   y ≈ 5m   z = 14m -->
    <a-entity gltf-model="#room" shadow="receive: true"> </a-entity>

    <!-- Firefox Quantum Logo -->
    <a-image src="#firefox" scale="2 2 1" position="-2 3 -2.49"> </a-image>

    <!-- Light Grey Panel -->
    <a-box color="#E0E0E0" scale="5 0.1 1" position="0 4 0" shadow="cast: true">
    </a-box>

    <!-- Yellow Box -->
    <a-box
      color="#FFEB3B"
      scale="0.5 0.5 0.5"
      position="-1 1 0"
      shadow="cast: true"
      shader="flat"
      animation="property: rotation;
                              to: 0 360 0;
                              loop: true;
                              dur: 5000;
                              easing: linear"
    >
    </a-box>

    <!-- Orange Box -->
    <!-- When applying more than one animation to the same object
                 you need to name-space them with a double underscore and
                 give the 2 animations 2 different names (line 85 and 90).
                 ALl the new easing functions are available here:
                 https://aframe.io/docs/1.0.0/components/animation.html#easings -->
    <a-box
      id="orange-box"
      color="#FF5722"
      scale="0.5 0.5 0.5"
      position="1 1 0"
      shadow="cast: true"
      animation__1="property: rotation;
                                 to: 0 360 0;
                                 loop: true;
                                 dur: 5000;
                                 easing: linear"
      animation__2="property: position;
                                 to: 1 1 -2;
                                 loop: true;
                                 dir: alternate;
                                 dur: 5000;
                                 easing: easeInOutCubic"
    >
    </a-box>

    <!-- Custom Light | Ambient -->
    <a-entity
      light="type: ambient;
                             intensity: 0.2"
    >
    </a-entity>

    <!-- Custom Light | Point -->
    <!-- ALl the new easing functions are available here:
             https://aframe.io/docs/1.0.0/components/animation.html#easings -->
    <a-entity
      light="type: point;
                             intensity: 0.8;
                             distance: 10;
                             castShadow: true"
      position="0 2 1.5"
      animation="property: light.intensity;
                                 from: 0.8;
                                 to: 0;
                                 loop: true;
                                 dir: alternate;
                                 dur: 5000;
                                 easing: easeInOutCubic"
    >
    </a-entity>

    <!-- Custom Light | Spot -->
    <a-entity
      light="type: spot;
                             target: #orange-box;
                             color: #C40070;
                             angle: 30;
                             penumbra: 0.1;
                             castShadow: true"
      position="0 3 1"
    >
    </a-entity>
  </a-scene>
</template>

<script>
export default {};
</script>
