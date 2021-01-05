AFRAME.registerComponent('like-count-up', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      var num = 0;
      var sum = 0;
      var likeNumEl = document.querySelector('#number-of-like');
      var likesEl = document.querySelector('#like');
      var whiteLikesEl = document.querySelector('#white-like');
      const id = likeNumEl.dataset.exhibitId;
      if (whiteLikesEl.getAttribute('visible') === true) {
        fetch(`https://localhost:3001/api/exhibits/${id}/incrementGoodCount`, {
          method: 'PUT',
        })
          .then((res) => res.json())
          .then((res) => console.log(res));
        num = parseInt(likeNumEl.getAttribute('value'));
        sum = num + 1;
        whiteLikesEl.setAttribute('visible', false);
        likesEl.setAttribute('visible', true);
        likeNumEl.setAttribute('value', sum);
      }
    });
  },
});
