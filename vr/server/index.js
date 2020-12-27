// Load required modules
const https = require('https');
const path = require('path');
const express = require('express'); // web framework external module
const fs = require('fs');

// 環境変数の読み込み
require('dotenv').config();

// https化に必要な設定
const privateKey = fs.readFileSync(__dirname + '/localhost-key.pem', 'utf-8');
const certificate = fs.readFileSync(__dirname + '/localhost.pem', 'utf-8');
const credentials = {
  key: privateKey,
  cert: certificate,
};

// Set process name
process.title = 'networked-aframe-server';

// Get port or default to 8080
const port = process.env.PORT || 8080;

// Setup and configure Express http server.
const app = express();

// フォームのPOST用
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  }),
);

// staticメソッドを利用し、指定ディレクトリ以下の静的ファイルを読み込む
// app.use(express.static(path.resolve(__dirname, '..', 'pages')));
app.use(express.static(path.resolve(__dirname, '..', 'pages')));

// routeの設定
app.use('/', require('./routes/index.js'));

// Serve the example and build the bundle in development.
if (process.env.NODE_ENV === 'development') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const config = require('../webpack.dev');

  app.use(
    webpackMiddleware(webpack(config), {
      publicPath: '/dist/',
    }),
  );
}

// Start Express http server
const webServer = https.createServer(credentials, app);
const io = require('socket.io')(webServer);

const rooms = {};

io.on('connection', (socket) => {
  console.log('user connected', socket.id);

  let curRoom = null;

  socket.on('joinRoom', (data) => {
    const { room } = data;

    if (!rooms[room]) {
      rooms[room] = {
        name: room,
        occupants: {},
      };
    }

    const joinedTime = Date.now();
    rooms[room].occupants[socket.id] = joinedTime;
    curRoom = room;

    console.log(`${socket.id} joined room ${room}`);
    socket.join(room);

    socket.emit('connectSuccess', { joinedTime });
    const occupants = rooms[room].occupants;
    io.in(curRoom).emit('occupantsChanged', { occupants });
  });

  socket.on('send', (data) => {
    io.to(data.to).emit('send', data);
  });

  socket.on('broadcast', (data) => {
    socket.to(curRoom).broadcast.emit('broadcast', data);
  });

  socket.on('disconnect', () => {
    console.log('disconnected: ', socket.id, curRoom);
    if (rooms[curRoom]) {
      console.log('user disconnected', socket.id);

      delete rooms[curRoom].occupants[socket.id];
      const occupants = rooms[curRoom].occupants;
      socket.to(curRoom).broadcast.emit('occupantsChanged', { occupants });

      if (occupants == {}) {
        console.log('everybody left room');
        delete rooms[curRoom];
      }
    }
  });
});

webServer.listen(port, () => {
  console.log('listening on https://localhost:' + port);
});
