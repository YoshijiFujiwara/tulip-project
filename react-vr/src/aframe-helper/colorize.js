// eslint-disable-next-line no-undef
window.AFRAME.registerComponent('colorize', {
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
        el.setAttribute('material', 'color', data.onClick);
      });
    }
  },
});
