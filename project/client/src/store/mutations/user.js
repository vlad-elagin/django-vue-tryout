import router from '../../routes.js';

export const userLogged = (state, params) => {
  state.user = {
    ...params,
  }

  router.push('/timer');
};

export const userLoggedOut = (state) => {
  state.user = {};

  router.push('/login');
}
