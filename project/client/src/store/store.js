import Vue from 'vue'
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  // save state in local storage
  storage: window.localStorage,

  // save only user token, we dont need anything else as it is fetched dynamically
  reducer: (state) => ({
    user: {
      token: state.user.token,
      username: state.user.username,
    },
    pomodoro: {
      id: state.pomodoro.id,
      started_at: state.pomodoro.started_at,
      duration: state.pomodoro.duration,
    },
  }),
});

const store = new Vuex.Store({
  state: {
    // user object
    user: {},

    // modal stuff
    modal: null,

    // pomodoros
    pomodorosList: [],

    // current pomodoro
    pomodoro: {},
  },
  mutations: mutations,
  actions: actions,
  plugins: [
    vuexLocal.plugin,
  ],
});

export default store;
