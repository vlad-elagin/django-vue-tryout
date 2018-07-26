import {
  signUp,
  signIn,
  logOut,
} from './user.js';

import {
  modalOpen
} from './modal.js';

import {
  getPomodoros,
  startPomodoro,
  finishPomodoro
} from './pomodoros.js';

const actions = {
  USER_SIGN_IN: signIn,
  USER_SIGN_UP: signUp,
  USER_SIGN_OUT: logOut,

  MODAL_OPEN: modalOpen,

  POMODOROS_GET: getPomodoros,
  POMODOROS_START: startPomodoro,
  POMODOROS_FINISH: finishPomodoro,
};

export default actions;
