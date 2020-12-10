const axios = require('axios');
const https = require('https');

// axiosリクエスト時のSSL周りのエラーを防止
// [FYI] https://github.com/axios/axios/issues/535
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

var router = require('express').Router();

// ロビー画面
router.get('/honnban', function (req, res) {
  res.render(__dirname + './../../pages/honnban/index.ejs');
});

// ブース画面(クエリパラメータで、ブースのIDを指定する)
router.get('/honnban/booths/:boothId', function (req, res) {
  res.render(__dirname + './../../pages/honnban/booth.ejs');
});

// サンプル画面
router.get('/honnban/sample', async function (req, res) {
  // 作品情報一覧
  let exhibits = [];

  // 作品情報一覧の取得
  const result = await axiosInstance.get('https://localhost:3001/api/exhibits');
  exhibits = result.data;

  const renderData = {
    exhibits,
  };
  res.render(__dirname + './../../pages/honnban/sample.ejs', renderData);
});

module.exports = router;
