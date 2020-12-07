import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'aframe';

import 'aframe-event-set-component';
import 'super-hands';
import 'aframe-physics-system/dist/aframe-physics-system'; // https://github.com/n5ro/aframe-physics-system/issues/151
import 'aframe-look-at-component';
import 'aframe-extras';
import 'aframe-teleport-controls';

// import 'networked-aframe';
// import 'socket.io';

// 自作のaframeコンポーネントたち
import './aframe-helper/change-colorize-property';
import './aframe-helper/colorize';
import './aframe-helper/play-and-stop';
import './aframe-helper/progressive-controls';
import './aframe-helper/random-color';
import './aframe-helper/refresh-obj';
import './aframe-helper/animated-colorize';
import './aframe-helper/blink-teleportation';
import './aframe-helper/entity-spawner';
import './aframe-helper/multiple-entities';
import './aframe-helper/spawn-in-circle'; // networked-aframeで使うので特に重要

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
