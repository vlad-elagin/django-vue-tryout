import { userLogged, userLoggedOut } from './user.js';
import { modalOpen, modalClose } from './modal.js';

const mutations = {
  'user:logged': userLogged,
  'user:logged_out': userLoggedOut,

  'modal:open': modalOpen,
  'modal:close': modalClose,
};

export default mutations;
