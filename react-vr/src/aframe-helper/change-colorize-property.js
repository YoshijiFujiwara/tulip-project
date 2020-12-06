// eslint-disable-next-line no-undef
window.AFRAME.registerComponent('change-colorize-property', {
  schema: {
    target: { type: 'selector', default: '#red' },
    newOnClick: { type: 'color', default: '' },
  },

  init() {
    const el = this.el;
    const data = this.data;

    el.addEventListener('click', function () {
      data.target.setAttribute('colorize', 'onClick', data.newOnClick);
    });
  },
});
