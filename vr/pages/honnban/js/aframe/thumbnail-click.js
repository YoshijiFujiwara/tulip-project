AFRAME.registerComponent('thumbnail-on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var thumbnailEl = document.querySelector('#exhibit-panel-thumbnail-'+exhibit.id);
      console.log(thumbnailEl);
      // let link = 'href: /honnban/booths/'+exhibit.id+'?username='+username+'&avatar='+avatar;
      thumbnailEl.setAttribute('link', 'href: /honnban/booths/'+exhibit.id+'?username='+username+'&avatar='+avatar);
    });
  },
});