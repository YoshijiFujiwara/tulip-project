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
        let requestUrl = '';
        console.log('window.host', window.location.hostname)
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname === '192.168.99.100' || hostname === 'tulip.local') {
          requestUrl = `https://${hostname}:3001/api/exhibits/${id}/incrementGoodCount`;
        } else {
          requestUrl = `https://www.tulipgumi.xyz/api/exhibits/${id}/incrementGoodCount`
        }
        fetch(requestUrl, {
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

      // 自分のnetworkIdを取得する
      const aScene = document.getElementsByTagName('a-scene')[0];
      const myNetworkId = aScene.dataset.myNetworkId;
      NAF.connection.broadcastData('iine', {
        networkId: myNetworkId,
      });
    });
  },
});
