<template>
  <a-scene>
    <!-- Camera Rig -->
    <a-entity position="0 0 8">
      <!-- Camera -->
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Empty Entity -->
    <a-entity
      multiple-entities="w: 1; h: 0.75; d: 0.1;
                                     axis: x; dir: negative; gap: 0.25"
      position="3 0 0"
    >
    </a-entity>

    <!-- Empty Entity -->
    <a-entity
      multiple-entities="num: 2; w: 1; h: 0.75; d: 0.1;
                                     axis: y; dir: positive; gap: 0.25"
      position="0 1 0"
    >
    </a-entity>

    <!-- Empty Entity -->
    <a-entity
      multiple-entities="num: 10; w: 1; h: 0.75; d: 0.1;
                                     axis: z; dir: negative; gap: 0.4;
                                     colorDefault: #0077FF;"
      position="0 1 -0.5"
    >
    </a-entity>

    <!-- Empty Entity -->
    <a-entity
      multiple-entities="num: 10; w: 0.1; h: 0.75; d: 0.1;
                                     axis: x; dir: positive; gap: 0"
      position="-0.5 3 0"
    >
    </a-entity>

    <!-- Ground -->
    <a-circle color="#DDDDDD" shader="flat" radius="2" rotation="-90 0 0">
    </a-circle>
  </a-scene>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
  layout: 'aframe_sandbox',
})
export default class Index extends Vue {
  mounted() {
    window.AFRAME.registerComponent('multiple-entities', {
      schema: {
        num: { type: 'number', default: 5 },
        w: { type: 'number', default: 1 },
        h: { type: 'number', default: 1 },
        d: { type: 'number', default: 1 },
        colorDefault: { type: 'color', default: '#212121' },
        colorHover: { type: 'color', default: '#FF7700' },
        axis: { type: 'string', default: 'x' },
        dir: { type: 'string', default: 'positive' },
        gap: { type: 'number', default: 0 },
      },

      init() {
        const el = this.el
        const data = this.data

        for (let i = 0; i < data.num; i++) {
          const myBox = document.createElement('a-entity')

          myBox.setAttribute('geometry', {
            primitive: 'box',
            width: data.w,
            height: data.h,
            depth: data.d,
          })

          myBox.setAttribute('material', 'color', data.colorDefault)

          const alignX = i * (data.w + data.gap) + data.w / 2
          const alignY = i * (data.h + data.gap) + data.h / 2
          const alignZ = i * (data.d + data.gap)

          var direction

          if (data.dir === 'positive') {
            direction = 1
          } else if (data.dir === 'negative') {
            direction = -1
          }

          if (data.axis === 'x') {
            myBox.object3D.position.x = alignX * direction
            myBox.object3D.position.y = data.h / 2
          } else if (data.axis === 'y') {
            myBox.object3D.position.y = alignY * direction
          } else if (data.axis === 'z') {
            myBox.object3D.position.z = alignZ * direction
            myBox.object3D.position.y = data.h / 2
          }

          el.appendChild(myBox)

          myBox.addEventListener('mouseenter', function () {
            myBox.setAttribute('material', 'color', data.colorHover)
          })

          myBox.addEventListener('mouseleave', function () {
            myBox.setAttribute('material', 'color', data.colorDefault)
          })
        }
      },
    })
  }
}
</script>
