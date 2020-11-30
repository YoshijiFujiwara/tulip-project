<template>
  <a-scene background="color: #FFFFFF">
    <!-- Camera Rig -->
    <a-entity id="cam-rig" position="0 0 4">
      <!--Camera -->
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-plane color="#DDDDDD" shader="flat" rotation="-90 0 0" scale="8 16 1">
    </a-plane>

    <!-- Blue -->
    <a-box
      id="blue"
      color="#00AAFF"
      position="-2 3 -4"
      change-colorize-property="newOnClick: #00AAFF"
    >
    </a-box>
    <!-- Yellow -->
    <a-box
      id="yellow"
      color="#FFAA00"
      position="-2 0.5 -4"
      change-colorize-property="newOnClick: #FFAA00"
    >
    </a-box>

    <!-- Green -->
    <a-box
      id="green"
      color="#00AA00"
      position="2 3 -4"
      change-colorize-property="newOnClick: #00AA00"
    >
    </a-box>
    <!-- Red -->
    <a-box
      id="red"
      position="2 0.5 -4"
      colorize="initialColor: #AA0000; onClick: #FF0000"
    >
    </a-box>
  </a-scene>
</template>

<script>
export default {
  mounted() {
    window.AFRAME.registerComponent('animated-colorize', {
      schema: {
        initialColor: { type: 'color', default: '' },
        onClick: { type: 'color', default: '' }
      },

      init() {
        const el = this.el
        const data = this.data

        el.setAttribute('material', 'color', data.initialColor)
      },

      update(oldData) {
        const el = this.el
        const data = this.data

        if (oldData.onClick !== data.onClick) {
          el.addEventListener('click', function () {
            el.setAttribute('animation', {
              property: 'material.color',
              from: data.initialColor,
              to: data.onClick,
              dir: 'alternate',
              loop: true
            })
          })
        }
      }
    })

    window.AFRAME.registerComponent('change-animated-colorize-property', {
      schema: {
        target: { type: 'selector', default: '#red' },
        newOnClick: { type: 'color', default: '' }
      },

      init() {
        const el = this.el
        const data = this.data

        el.addEventListener('click', function () {
          data.target.setAttribute(
            'animated-colorize',
            'onClick',
            data.newOnClick
          )
        })
      }
    })

    window.AFRAME.registerComponent('match-animated-colorize', {
      schema: {
        target: { type: 'selector', default: '#red' }
      },

      init() {
        this.color = new window.THREE.Color()
      },

      tick() {
        const el = this.el
        const data = this.data
        const color = this.color
        const targetColor = data.target.getAttribute('material').color

        color.set(targetColor)
        el.components.material.material.color.copy(color)
      }
    })
  }
}
</script>
