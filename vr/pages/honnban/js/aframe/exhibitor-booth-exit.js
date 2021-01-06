AFRAME.registerComponent('dialog-on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var exitEl = document.querySelector('#exhibitor-exit');
      var vertificationEl = document.querySelector('#verification');
      var okEl = document.querySelector('#ok');
      var noEl = document.querySelector('#no');
      if(exitEl.getAttribute('visible') === true) {
        vertificationEl.setAttribute('visible', true);
        okEl.setAttribute('visible', true);
        noEl.setAttribute('visible', true);
      } else {
        vertificationEl.setAttribute('visible', false);
        okEl.setAttribute('visible', false);
        noEl.setAttribute('visible', false);
      }
    });
  },
});

AFRAME.registerComponent('vertification-ok-on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var okEl = document.querySelector('#ok');
      const hostname = window.location.hostname;
      if (hostname === 'localhost' || hostname === '192.168.99.100' || hostname === 'tulip.local') {
        requestUrl = `https://${hostname}:3000/exhibitors/mypage`;
      } else {
        requestUrl = `https://www.tulipgumi.xyz/exhibitors/mypage`
      }
      okEl.setAttribute(link=`href: ${requestUrl}`);
    });
  },
});

AFRAME.registerComponent('vertification-no-on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var exitEl = document.querySelector('#exhibitor-exit');
      var vertificationEl = document.querySelector('#verification');
      var okEl = document.querySelector('#ok');
      var noEl = document.querySelector('#no');
      exitEl.setAttribute('visible', true);
      vertificationEl.setAttribute('visible', false);
      okEl.setAttribute('visible', false);
      noEl.setAttribute('visible', false);
    });
  },
});