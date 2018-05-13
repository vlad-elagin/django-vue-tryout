import Vue from 'vue'
import VueRouter from 'vue-router';

import App from '@layout/App.vue'
import store from './store.js';
import router from './routes.js';
import './global.styl';

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
