window.AFRAME.registerComponent('refresh-obj', {
  init() {
    this.el.addEventListener('click', function () {
      const myGBcursor = document.querySelector('#myGBcursor');
      myGBcursor.components.raycaster.refreshObjects();
    });
  },
});
