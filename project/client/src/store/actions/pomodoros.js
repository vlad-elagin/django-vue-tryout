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
