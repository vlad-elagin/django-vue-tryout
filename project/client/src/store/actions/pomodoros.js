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

  context.dispatch('POMODOROS_GET');
  context.commit('pomodoros:start', res.data);
};

export const finishPomodoro = async (context, { status }) => {
  const res = await axios({
    method: 'PATCH',
    url: '/api/pomodoros/',
    data: {
      id: context.state.pomodoro.id,
      status: status === 'stopped' ? 'failed' : 'finished',
    },
  });

  if (res.status !== 200) {
    context.commit('modal:open', {
      title: 'Oops...',
      message: 'Big bad python is complaining again',
      errors: res.errors,
    });
    return;
  }

  if (status === 'finished' && res.status === 200) {
    context.commit('modal:open', {
      title: 'Oooh yes!',
      message: 'You did it, baby. It\'s time to stretch up a bit and start new pomodoro!',
    });
  }

  context.dispatch('POMODOROS_GET');
  context.commit('pomodoros:finish');
};
