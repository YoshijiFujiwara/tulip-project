import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'aframe';
import 'networked-aframe';
import 'socket.io';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
