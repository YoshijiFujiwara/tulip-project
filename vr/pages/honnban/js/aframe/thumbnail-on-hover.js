AFRAME.registerComponent('thumbnail-on-hover', {
  init: function () {
    const aScene = document.getElementsByTagName('a-scene')[0];
    const exhibits = JSON.parse(aScene.dataset.exhibits)
    console.log("exhibits", exhibits)
    exhibits.forEach( (exhibit)=> {
      const thumbnailEl = document.querySelector(`#exhibit-panel-thumbnail-${exhibit.id}`);
      const curorEl = document.querySelector('#cursor-item');
      thumbnailEl.addEventListener('mouseenter', function (evt) {
        curorEl.setAttribute('material', 'color: #00acff');
      });
      thumbnailEl.addEventListener('mouseleave', function (evt) {
        curorEl.setAttribute('material', 'color: #ffffff');
      });
    })
  },
});