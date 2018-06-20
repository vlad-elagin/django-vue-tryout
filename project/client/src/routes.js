import VueRouter from 'vue-router';
import store from './store/store.js';

import LoginForm from '@components/LoginForm/LoginForm.vue';
import SignUpForm from '@components/SignUpForm/SignUpForm.vue';
import TimerPage from '@components/TimerPage/TimerPage.vue';

const routes = [
  { path: '/' },
  { path: '/login', component: LoginForm },
  { path: '/signup', component: SignUpForm },
  { path: '/timer', component: TimerPage },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  // index redirects
  if (to.path === '/') {
    if (store.state.user.token) {
      return next('/timer');
    }
    // else - to login
    return next('/login');
  }
  // prevent logged user from accessing login and signup pages
  const notLoggedRoutes = [
    '/login',
    '/signup',
  ];
  if (
    store.state.user.token &&
    notLoggedRoutes.includes(to.path)
  ) {
    return next('/timer');
  }

  // prevent anonymous user from accessing timer page
  const loggedRoutes = [
    '/timer',
  ];
  if (
    !store.state.user.token &&
    loggedRoutes.includes(to.path)
  ) {
    return next('/login');
  }

  // pass
  next();
});

export default router;
