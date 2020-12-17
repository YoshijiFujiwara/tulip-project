function getDate() {
  var today = new Date();

  // 年・月・日・曜日を取得
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var week = today.getDay();
  var day = today.getDate();
  var time = new Date();

  // 時・分・秒・曜日を取得
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var week_ja = new Array("日","月","火","水","木","金","土");
  var now = "";

  // 表示時刻のフォーマット
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (second < 10) second = '0' + second;

  // time = year + "年" + month + "月" + day + "日" + week_ja[week] + "曜日" + hour + "時" + minute + "分" + second + "秒";
  // time = hour + "時" + minute + "分";
  now = hour + ":" + minute + ":"+second;


  var timeEl = document.querySelector('#now-time');
    timeEl.value = now;
    console.log(now);
    timeEl.setAttribute('text', {
      value: now,
      nagate: 'false',
      color: '#ffffff',
  });

  return timeEl;
}
setInterval('getDate()',1000);