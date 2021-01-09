AFRAME.registerComponent('thumbnail-on-hover', {
  init: function () {
    for(i=1; i< 9; i++) {
      var thumbnailEl = document.querySelector('#exhibit-panel-thumbnail-'+i);
      var curorEl = document.querySelector('#cursor-item');
      thumbnailEl.addEventListener('mouseenter', function (evt) {
        curorEl.setAttribute('material', 'color: #00acff');
      });
      thumbnailEl.addEventListener('mouseleave', function (evt) {
        curorEl.setAttribute('material', 'color: #ffffff');
      });
    }
  },
});