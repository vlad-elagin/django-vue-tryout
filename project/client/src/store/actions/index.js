import {
  signUp,
  signIn
} from './user.js';

import {
  modalOpen
} from './modal.js';

const actions = {
  USER_SIGN_IN: signIn,
  USER_SIGN_UP: signUp,

  MODAL_OPEN: modalOpen,
};

export default actions;
