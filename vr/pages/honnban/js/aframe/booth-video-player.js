AFRAME.registerComponent('booth-video-player', {
  init: function () {
    const myVideo = document.querySelector('#asset-demo');
    const videocontrolsEl = document.querySelector('#video-controls');

    // 自分のnetworkIdを取得する
    const aScene = document.getElementsByTagName('a-scene')[0];
    const myNetworkId = aScene.dataset.myNetworkId;

    videocontrolsEl.addEventListener('click', function () {
      console.log("video");
      if (myVideo.paused) {
        myVideo.play();
        videocontrolsEl.setAttribute('src', '#asset-pause');
        console.log("ビデオを再生する");

        NAF.connection.broadcastData('demoVideoPlaying', {
          networkId: myNetworkId,
          nowPlaying: true,
        });
      } else {
        myVideo.pause();
        videocontrolsEl.setAttribute('src', '#asset-play');
        console.log("ビデオを止める");

        NAF.connection.broadcastData('demoVideoPlaying', {
          networkId: myNetworkId,
          nowPlaying: false,
        });
      }
    });

    const curorEl = document.querySelector('#cursor-item');
    videocontrolsEl.addEventListener('mouseenter', function () {
      curorEl.setAttribute('material', 'color: #00acff');
      videocontrolsEl.setAttribute('scale', {x: 0.45, y: 0.45, z: 0.45});
    });
    videocontrolsEl.addEventListener('mouseleave', function () {
      curorEl.setAttribute('material', 'color: #ffffff');
      videocontrolsEl.setAttribute('scale', {x: 0.4, y: 0.4, z: 0.54});
    });
  },
});