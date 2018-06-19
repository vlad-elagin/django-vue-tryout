import Vue from 'vue'
import VueRouter from 'vue-router';

import App from '@layout/App.vue'
import store from './store/store.js';
import router from '@router';
import './axiosConfig.js';
import './global.styl';

// config vue
Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
