import Vue from 'vue'
import VueRouter from 'vue-router';
import VueSelect from 'vue-select';

import App from '@layout/App.vue'
import store from './store/store.js';
import router from '@router';
import './axiosConfig.js';
import './global.styl';

// config vue
Vue.config.productionTip = false;

// set up routing
Vue.use(VueRouter);

// register third party components
Vue.component('v-select', VueSelect);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
