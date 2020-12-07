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

// index.htmlだけ直接指定
router.get('/', (req, res) => {
  // レンダリングを行う
  // [FYI] https://qiita.com/kamihork/items/1b13d2157979d1837849
  res.render(__dirname + './../../pages/index.html');
});

router.get('/honnban/vr', async function (req, res) {
  // 作品情報一覧
  let exhibits = [];

  // 作品情報一覧の取得
  const result = await axiosInstance.get('https://localhost:3001/api/exhibits');
  exhibits = result.data;

  console.log(exhibits);

  const renderData = {
    exhibits,
  };
  res.render(__dirname + './../../pages/honnban/index.ejs', renderData);
});

module.exports = router;
