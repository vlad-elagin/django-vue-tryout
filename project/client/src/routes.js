import VueRouter from 'vue-router';
import store from './store/store.js';

import LoginForm from '@components/LoginForm/LoginForm.vue';
import SignUpForm from '@components/SignUpForm/SignUpForm.vue';
import TimerPage from '@components/TimerPage/TimerPage.vue';

const routes = [
  { path: '/', redirect: () => {
    // if logged in - to timer
    if (store.state.user.token) {
      return '/timer';
    }
    // else - to login
    return '/login';
  }},
  { path: '/login', component: LoginForm },
  { path: '/signup', component: SignUpForm },
  { path: '/timer', component: TimerPage },
];

const router = new VueRouter({ routes });

export default router;
