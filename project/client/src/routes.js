import VueRouter from 'vue-router';

import LoginForm from '@components/LoginForm/LoginForm.vue';
import SignUpForm from '@components/SignUpForm/SignUpForm.vue';

const routes = [
  { path: '/', redirect: () => {
    // if logged in - to timer

    // else - to login
    return '/login';
  }},
  { path: '/login', component: LoginForm },
  { path: '/signup', component: SignUpForm }
];

const router = new VueRouter({ routes });

export default router;
