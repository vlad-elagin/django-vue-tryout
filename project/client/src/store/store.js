import Vue from 'vue'
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

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
  mutations: mutations,
  actions: actions,
});

export default store;
