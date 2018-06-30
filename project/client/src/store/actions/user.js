import router from '@router';
import axios from 'axios';

export const signUp = async (context, data) => {
  const res = await axios({
    method: 'POST',
    url: '/api/user/signup/',
    data,
  });

  if (res.status !== 201) {
      // validation errors or username taken
      context.commit('modal:open', {
        title: 'Error while signing up',
        message: 'Big bad python is complaining again:',
        errors: res.errors,
      });
      return;
  }

  // seems ok
  context.dispatch('MODAL_OPEN', {
    title: 'Welcome onboard!',
    message: 'Your account have been created, please login.',
    autoDismiss: 3,
  });

  router.push('/login');
};

export const signIn = async (context, data) => {
  const res = await axios({
    method: 'POST',
    url: '/api/user/signin/',
    data,
  });

  if (res.status !== 200) {
    context.commit('modal:open', {
      title: 'Error while signing in',
      message: 'Big bad python is complaining again:',
      errors: res.errors,
    });
    return;
  }

  context.commit('user:logged', {
    username: res.data.user,
    token: res.data.token,
  });
}

export const logOut = async (context) => {
  const res = await axios({
    method: 'GET',
    url: '/api/user/logout/',
  });

  if (res.status !== 200) {
    context.commit('modal:open', {
      title: 'Error while logging out',
      message: 'Your token have probably expired',
    });
  }

  context.commit('user:logged_out');
}
