import { userLogged, userLoggedOut } from './user.js';
import { modalOpen, modalClose } from './modal.js';
import { gotPomodorosList } from './pomodoros.js';

const mutations = {
  'user:logged': userLogged,
  'user:logged_out': userLoggedOut,

  'modal:open': modalOpen,
  'modal:close': modalClose,

  'pomodoros:list': gotPomodorosList,
};

export default mutations;
