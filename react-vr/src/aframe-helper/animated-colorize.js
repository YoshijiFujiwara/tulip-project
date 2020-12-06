window.AFRAME.registerComponent('animated-colorize', {
  schema: {
    initialColor: { type: 'color', default: '' },
    onClick: { type: 'color', default: '' },
  },

  init() {
    const el = this.el;
    const data = this.data;

    el.setAttribute('material', 'color', data.initialColor);
  },

  update(oldData) {
    const el = this.el;
    const data = this.data;

    if (oldData.onClick !== data.onClick) {
      el.addEventListener('click', function () {
        el.setAttribute('animation', {
          property: 'material.color',
          from: data.initialColor,
          to: data.onClick,
          dir: 'alternate',
          loop: true,
        });
      });
    }
  },
});

window.AFRAME.registerComponent('change-animated-colorize-property', {
  schema: {
    target: { type: 'selector', default: '#red' },
    newOnClick: { type: 'color', default: '' },
  },

  init() {
    const el = this.el;
    const data = this.data;

    el.addEventListener('click', function () {
      data.target.setAttribute('animated-colorize', 'onClick', data.newOnClick);
    });
  },
});

window.AFRAME.registerComponent('match-animated-colorize', {
  schema: {
    target: { type: 'selector', default: '#red' },
  },

  init() {
    this.color = new window.THREE.Color();
  },

  tick() {
    const el = this.el;
    const data = this.data;
    const color = this.color;
    const targetColor = data.target.getAttribute('material').color;

    color.set(targetColor);
    el.components.material.material.color.copy(color);
  },
});
