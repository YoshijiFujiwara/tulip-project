import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/Index.vue'
import Sandbox from './pages/sanbdox/Index.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  { path: '/sandbox/:id', component: Sandbox }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;