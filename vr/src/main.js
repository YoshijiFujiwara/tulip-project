import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router';

// aframe関連
import 'aframe';
import 'aframe-event-set-component';
import 'super-hands';
// import './assets/progressive-controls';
// import 'aframe-physics-system';
import 'aframe-look-at-component';
import 'aframe-extras';
import 'aframe-teleport-controls';

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box',
  'a-ring',
  'a-asset-item',
  'a-asset-items',
  'a-assets',
  'a-cursor',
  'a-text',
  'a-light',
  'a-plane',
  'a-sky',
  'a-gltf-model',
  'a-image',
  'a-cylinder',
  'a-circle',
]

new Vue({
  render: h => h(App),
  router
}).$mount('#app')