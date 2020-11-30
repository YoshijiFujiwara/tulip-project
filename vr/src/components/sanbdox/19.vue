<template>
  <a-scene>
    <!-- Camera Rig -->
    <a-entity position="-4.5 0 1" rotation="0 -45 0">
      <!-- Camera -->
      <a-camera>
        <a-cursor raycaster="objects: .ui"></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-circle
      color="#EEEEEE"
      rotation="-90 0 0"
      radius="1.5"
      position="0 0 -5"
      shader="flat"
    >
    </a-circle>

    <!-- Yellow box | Trigger -->
    <a-box
      id="yellow"
      color="#FFAA00"
      position="0 0.5 -5"
      class="ui"
      event-set__enter="_event: mouseenter; material.color: #FF7700"
      event-set__leave="_event: mouseleave; material.color: #FFAA00"
      event-set__scale="_target: #blue; _event: click; scale: 4 2 0.1"
      event-set__position="_target: #grey; _event: click; position: 0 1.75 -5"
    >
    </a-box>

    <!-- Blue Box | Morphing Panel -->
    <a-box id="blue" color="#00AAFF" position="0 3 -5" opacity="1"></a-box>
    <!-- Grey Plane | Reset/Close -->
    <!-- ******** AT LINE 45 OF THIS DOCUMENT, THE CODE HAS BEEN CORRECTED ******** -->
    <!-- INSTEAD OF event-set__position="_event: click; position.to: 0 3 -5" LIKE I DO IN THE VIDEO -->
    <!-- THE COORRECT CODE IS event-set__position="_event: click; position: 0 3 -5" -->
    <!-- MY APOLOGIES, GUYS! :-) -->
    <a-plane
      id="grey"
      color="#333333"
      position="0 3 -5"
      scale="0.5 0.5 1"
      class="ui"
      event-set__enter="_event: mouseenter; material.color: #FF0000"
      event-set__leave="_event: mouseleave; material.color: #333333"
      event-set__position="_event: click; position: 0 3 -5"
      event-set__scale="_target: #blue; _event: click; scale: 1 1 1"
    >
    </a-plane>
  </a-scene>
</template>

<script>
export default {}
</script>
