function getDate() {
  var time = new Date();

  // 時・分・秒・曜日を取得
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var now = '';

  // 表示時刻のフォーマット
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (second < 10) second = '0' + second;

  now = hour + ':' + minute + ':' + second;
  var timeEl = document.querySelector('#now-time');
  timeEl.value = now;
  timeEl.setAttribute('text', {
    value: now,
    negate: 'true',
    color: '#ffffff',
  });
  return timeEl;
}
setInterval('getDate()', 1000);
