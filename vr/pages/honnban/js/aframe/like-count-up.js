function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

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

        likeNumEl.setAttribute(
          'sound',
          `src: /honnban/assets/music/iine_voice.wav; volume:0.1`,
        );
        likeNumEl.components.sound.playSound();
        
        const iinePlayer = getParameterByName('username');

        // 自分のnetworkIdを取得する
        const aScene = document.getElementsByTagName('a-scene')[0];
        const myNetworkId = aScene.dataset.myNetworkId;
        NAF.connection.broadcastData('iine', {
          networkId: myNetworkId,
          iinePlayer,
        });
      }
    });
  },
});
