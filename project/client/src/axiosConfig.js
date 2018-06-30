import axios from 'axios';
import store from './store/store.js';

axios.interceptors.request.use((config) => {
  // automatically sign requests with token if exists
  if (store.state.user.token) {
    config.headers['Authorization'] = `Token ${store.state.user.token}`;
  }
  return config;
}, null);

axios.interceptors.response.use(null, err => {
  // prevent axios from throwing errors and handle them by ourselves
  return Promise.resolve({
    status: err.response.status,
    errors: err.response.data.errors,
  });
});
