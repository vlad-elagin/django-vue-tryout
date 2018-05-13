import axios from 'axios';

// automatically set headers and add token is logged in
axios.interceptors.request.use((config) => {
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // add token later
  return config;
}, null);

axios.interceptors.response.use(null, err => {
  // prevent axios from throwing errors and handle them by ourselves
  return Promise.resolve({
    status: err.response.status,
    errors: err.response.data.errors,
  });
});
