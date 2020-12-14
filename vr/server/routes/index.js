const axios = require('axios');
const https = require('https');

// axiosリクエスト時のSSL周りのエラーを防止
// [FYI] https://github.com/axios/axios/issues/535
const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

var router = require('express').Router();

// ロビー画面
router.get('/honnban', async function (req, res) {
  // 作品情報一覧の取得
  const result = await axiosInstance.get('exhibits');
  const exhibits = result.data;

  const renderData = {
    exhibits,
  };

  res.render(__dirname + './../../pages/honnban/index.ejs', renderData);
});

// ブース画面(クエリパラメータで、作品のIDを指定する)
router.get('/honnban/booths/:exhibitId', async function (req, res) {
  // 作品のidのブース情報の取得
  const exhibitId = req.params.exhibitId;
  const result = await axiosInstance.get(`exhibits/${exhibitId}`);
  const exhibit = result.data;

  const renderData = {
    exhibit,
  };

  res.render(__dirname + './../../pages/honnban/booth.ejs', renderData);

});

// サンプル画面
router.get('/honnban/sample', async function (req, res) {
  // 作品情報一覧
  let exhibits = [];

  // 作品情報一覧の取得
  const result = await axiosInstance.get('exhibits');
  exhibits = result.data;

  const renderData = {
    exhibits,
  };
  res.render(__dirname + './../../pages/honnban/sample.ejs', renderData);
});

module.exports = router;
