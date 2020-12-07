<template>
  <div>
    <a-scene>
      <!-- Asset Management System -->
      <a-assets>
        <img id="floor" src="/assets/img/floor.jpg" />
        <img id="floor-NRM" src="/assets/img/floor.jpg" />
      </a-assets>

      <!-- Ground -->
      <a-plane
        material="color: #FFFFFF;
                        src: #floor;
                        repeat: 5 5;
                        normal-map: #floor-NRM;
                        normal-texture-repeat: 5 5"
        rotation="-90 0 0"
        scale="10 10 1"
      >
      </a-plane>
    </a-scene>
  </div>
</template>

<script>
export default {};
</script>
