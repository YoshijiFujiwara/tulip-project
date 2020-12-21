AFRAME.registerComponent('on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var num = 0;
      var sum = 0;
      var likeNumEl = document.querySelector('#number-of-like');
      var likesEl = document.querySelector('#like');
      var whiteLikesEl = document.querySelector('#white-like');
      if(likesEl.getAttribute('visible') === true) {
        num = parseInt(likeNumEl.getAttribute('value'));
        sum = num + 1;
        likesEl.setAttribute('visible', false);
        whiteLikesEl.setAttribute('visible', true);
        likeNumEl.setAttribute('value', sum);
      }
    });
  },
});
