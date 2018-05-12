import Vue from 'vue'
import App from '@layout/App.vue'
import store from './store.js';
import './global.styl';

Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
