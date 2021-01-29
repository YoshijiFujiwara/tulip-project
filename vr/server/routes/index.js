const axios = require('axios');
const https = require('https');

// axiosリクエスト時のSSL周りのエラーを防止
// [FYI] https://github.com/axios/axios/issues/535
const axiosInstance = axios.create({
  baseURL: process.env.VR_SSR_API_URL, // ここSSR時の環境変数を指定しなあかんのや！
  httpsAgent: process.env.PRODUCTION_MODE
    ? undefined
    : new https.Agent({
        rejectUnauthorized: false,
      }),
});

const wsServerUrl = process.env.WS_SERVER_URL;

var router = require('express').Router();

//
router.get('/honnban/select_avatar', function (req, res) {
  console.log('get select-avatar invoked');

  return res.render(__dirname + './../../pages/honnban/select_avatar.ejs');
});

router.post('/honnban/select_avatar', function (req, res) {
  console.log('post select-avatar invoked');
  // post
  const username = req.body.username;
  const avatar = req.body.avatar;
  const enableAudio = req.body.enable_audio === 'on' || false;

  if (username || avatar) {
    return res.redirect(
      `/honnban?username=${username}&avatar=${avatar}&enable_audio=${enableAudio}`,
    );
  } else {
    return res.redirect('/honnban/select_avatar');
  }
});

// ロビー画面
router.get('/honnban', async function (req, res) {
  const username = req.query.username;
  const avatar = req.query.avatar;
  const enableAudio =
    (req.query.enable_audio && req.query.enable_audio === 'true') || false;

  if (!username || !avatar) {
    return res.redirect('/honnban/select_avatar');
  }

  // 作品情報一覧の取得
  const result = await axiosInstance.get('exhibits');

  const apiUrl = process.env.VR_API_URL;

  let exhibits = result.data;
  const rankedExhibitIds = exhibits.sort((a, b) => {
    return b.goodCount - a.goodCount;
  }).map(exhibit=>exhibit.id);

  exhibits = exhibits.map((exhibit, index) => {
    const rank = rankedExhibitIds.findIndex(exhibitId => exhibitId === exhibit.id) + 1;

    return {
      ...exhibit,
      rank
    }
  })
  const renderData = {
    exhibits,
    username,
    avatar,
    apiUrl,
    wsServerUrl,
    enableAudio
  };
  return res.render(__dirname + './../../pages/honnban/index.ejs', renderData);
});

// ブース画面(クエリパラメータで、作品のIDを指定する)
router.get('/honnban/booths/:exhibitId', async function (req, res) {
  console.log('boothejs invoked');

  const username = req.query.username;
  const avatar = req.query.avatar;
  const enableAudio =
    (req.query.enable_audio && req.query.enable_audio === 'true') || false;

  if (!username || !avatar) {
    return res.redirect('/honnban/select_avatar');
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
    wsServerUrl,
    enableAudio,
  };

  return res.render(__dirname + './../../pages/honnban/booth.ejs', renderData);
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
  return res.render(__dirname + './../../pages/honnban/sample.ejs', renderData);
});

module.exports = router;
