import axios from 'axios';

export const getPomodoros = async (context) => {
  const res = await axios({
    method: 'GET',
    url: '/api/pomodoros/'
  });

  if (res.status !== 200) {
    context.commit('modal:open', {
      title: 'Error occured when fetching pomodoros',
      message: 'You can try again but honestly I dont think it will help',
    });
    return;
  }

  context.commit('pomodoros:list', res.data);
};

export const startPomodoro = async (context, data) => {
  const res = await axios({
    method: 'POST',
    url: '/api/pomodoros/',
    data,
  });

  if (res.status !== 201) {
    context.commit('modal:open', {
      title: 'Oops...',
      message: 'Big bad python is complaining again',
      errors: res.errors,
    });
    return;
  }

  context.commit('pomodoros:start', res.data);
};

export const finishPomodoro = async (context, { status }) => {
  const res = await axios({
    method: 'PUT',
    url: '/api/pomodoros/',
    data: {
      id: context.state.pomodoro.id,
      status,
    },
  });

  if (res.status !== 201) {
    context.commit('modal:open', {
      title: 'Oops...',
      message: 'Big bad python is complaining again',
      errors: res.errors,
    });
    return;
  }

  context.commit('pomodoros:finish');
};
