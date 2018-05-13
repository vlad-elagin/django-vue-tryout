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
    // user: {
    //   id: '123',
    //   name: '123',
    // },

    // modal stuff
    modal: null,
    // modal: {
    //   autoDismiss: 10 // value in seconds
    //   title: 'hi i am modal',
    //   message: 'there was an issue',
    //   errors: {},
    // },
  },
  mutations: {
    // user stuff
    'user:logged': state => state.user = 'john doe',

    // modal stuff
    'modal:open': (state, params) => {
      state.modal = {
        ...params,
      };
    },
    'modal:close': state => state.modal = null,
  },
  actions: {
    // user stuff
    logIn: context => context.commit('user:logged'),
    USER_SIGN_UP: signUp,

    // modal stuff
    MODAL_OPEN: (context, data) => {
      context.commit('modal:open', data);
      // auto hide modal
      if (data.autoDismiss) {
        setTimeout(() => {
          context.commit('modal:close')
        }, data.autoDismiss * 1000);
      }
    },
  },
});

export default store;
