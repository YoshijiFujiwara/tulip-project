AFRAME.registerComponent('sakuhin-on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var menuEl = document.querySelector('#menu');
      var menuBackgroundEl = document.querySelector('#menuBackground');
      var loveEl = document.querySelector('#i-love');
      var twincleEl = document.querySelector('#i-twincle');
      var smileEl = document.querySelector('#i-smile');
      var thinkEl = document.querySelector('#i-think');
      var cryEl = document.querySelector('#i-cry');
      var angryEl = document.querySelector('#i-angry');

      menuEl.setAttribute('visible', true);
      menuBackgroundEl.setAttribute('visible', true);
      loveEl.setAttribute('visible', true);
      twincleEl.setAttribute('visible', true);
      smileEl.setAttribute('visible', true);
      thinkEl.setAttribute('visible', true);
      cryEl.setAttribute('visible', true);
      angryEl.setAttribute('visible', true);
      console.log(document.querySelector('#i-love'));
    });
  },
});