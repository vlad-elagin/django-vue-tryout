import {
  signUp,
  signIn,
  logOut,
} from './user.js';

import {
  modalOpen
} from './modal.js';

const actions = {
  USER_SIGN_IN: signIn,
  USER_SIGN_UP: signUp,
  USER_SIGN_OUT: logOut,

  MODAL_OPEN: modalOpen,
};

export default actions;
