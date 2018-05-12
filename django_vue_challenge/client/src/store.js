import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    'user:logged': state => state.user = 'john doe',
  },
  actions: {
    logIn: context => context.commit('user:logged'),
  }
});

export default store;
