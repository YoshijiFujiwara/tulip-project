const axios = require('axios');
const https = require('https');

// axiosリクエスト時のSSL周りのエラーを防止
// [FYI] https://github.com/axios/axios/issues/535
const axiosInstance = axios.create({
  baseURL: process.env.VR_API_URL,
  httpsAgent: process.env.PRODUCTION_MODE
    ? undefined
    : new https.Agent({
        rejectUnauthorized: false,
      }),
});

var router = require('express').Router();

//
router.get('/honnban/select_avatar', function (req, res) {
  console.log('get select-avatar invoked');

  res.render(__dirname + './../../pages/honnban/select_avatar.ejs');
});

router.post('/honnban/select_avatar', function (req, res) {
  console.log('post select-avatar invoked');
  // post
  const username = req.body.username;
  const avatar = req.body.avatar;

  if (username || avatar) {
    res.redirect(`/honnban?username=${username}&avatar=${avatar}`);
  } else {
    res.redirect('/honnban/select_avatar');
  }
});

// ロビー画面
router.get('/honnban', async function (req, res) {
  console.log('honnbann invoked');

  const username = req.query.username;
  const avatar = req.query.avatar;
  if (!username || !avatar) {
    res.redirect('/honnban/select_avatar');
  }

  // 作品情報一覧の取得
  const result = await axiosInstance.get('exhibits');
  const exhibits = result.data;
  const renderData = {
    exhibits,
    username,
    avatar,
  };

  res.render(__dirname + './../../pages/honnban/index.ejs', renderData);
});

// ブース画面(クエリパラメータで、作品のIDを指定する)
router.get('/honnban/booths/:exhibitId', async function (req, res) {
  console.log('boothejs invoked');

  const username = req.query.username;
  const avatar = req.query.avatar;
  if (!username || !avatar) {
    res.redirect('/honnban/select_avatar');
  }
  // 作品のidのブース情報の取得
  const exhibitId = req.params.exhibitId;
  const result = await axiosInstance.get(`exhibits/${exhibitId}`);
  const exhibit = result.data;
  const apiUrl = process.env.VR_API_URL;

  const renderData = {
    exhibit,
    username,
    avatar,
    apiUrl,
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
