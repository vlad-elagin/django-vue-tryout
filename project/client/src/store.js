import Vue from 'vue'
import Vuex from 'vuex';

import {
  signUp
} from '@actions/user.js';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // user object
    user: null,

  },
  mutations: {
    // user stuff
    'user:logged': state => state.user = 'john doe',
  },
  actions: {
    // user stuff
    logIn: context => context.commit('user:logged'),
    USER_SIGN_UP: signUp,
  },
});

export default store;
