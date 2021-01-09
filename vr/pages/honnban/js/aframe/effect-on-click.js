AFRAME.registerComponent('effect-on-click', {
  init: function () {
    var self = this;
    this.el.addEventListener('click', function (evt) {
      console.log('effect-on-click invoked');
      console.log('event', evt);
      console.log('event target id', evt.target.id);
      var reactionSelectEl = document.querySelector('#'+evt.target.id);
      // angry, cry, love, smile, think, twincle
      // を、idから取り出す
      const reactionType = evt.target.id.replace('i-', '');
      // reaction情報をブロードキャストする
      // TODO: 今は動かないので、sakuhin-on-clickの中で仮実装をしています
      reactionSelectEl.setAttribute('sound', 'src: #assets-'+reactionType+'-effect; volume:2');
      reactionSelectEl.components.sound.playSound();
    });
  },
});
