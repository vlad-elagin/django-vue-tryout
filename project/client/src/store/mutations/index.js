import { userLogged } from './user.js';
import { modalOpen, modalClose } from './modal.js';

const mutations = {
  'user:logged': userLogged,

  'modal:open': modalOpen,
  'modal:close': modalClose,
};

export default mutations;
