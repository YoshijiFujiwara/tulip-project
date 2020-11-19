<template>
  <div>
    <a-scene>
      <!-- Asset Management System -->
      <a-assets>
        <img id="metal-NRM" src="/vr/img/metal.jpg" />
        <img id="brick" src="/vr/img/brick.jpg" />
        <img id="brick-NRM" src="/vr/img/brick.jpg" />
      </a-assets>

      <!-- Light-Blue Box > Metal Room -->
      <!-- To achieve reflection, with v1.0.4 you need to use side="back" (line 34 and 46) -->
      <a-box
        color="#FFFFFF"
        src="/vr/img/metal.jpg"
        repeat="1 1"
        normal-map="#metal-NRM"
        normal-texture-repeat="1 1"
        normal-scale="1 -1"
        roughness="0.5"
        width="4"
        height="4"
        depth="4"
        position="-2 1.5 -9"
        side="back"
      >
      </a-box>
      <!-- Brown Box > Brick Room -->
      <a-box
        material="color: #FFFFFF;
                  src: #brick;
                  repeat: 2 2;
                  normal-map: #brick-NRM;
                  normal-texture-repeat: 2 2;
                  normal-scale: 1 -1;
                  roughness: 0.9"
        width="4"
        height="4"
        depth="4"
        position="2 1.5 -9"
        side="back"
      >
      </a-box>

      <!-- Blue Sphere | Standard Material -->
      <a-sphere
        material="color: #0000AA;
                  roughness: 0.2
                  shader: standard"
        radius="0.5"
        position="-2 1.5 -8"
      >
      </a-sphere>
      <!-- Red Sphere | Flat Material -->
      <a-sphere
        material="color: #AA0000;
                  roughness: 0.2;
                  shader: flat;
                  opacity: 0.5"
        radius="0.5"
        position="2 1.5 -8"
      >
      </a-sphere>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Index extends Vue {}
</script>
