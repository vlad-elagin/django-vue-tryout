export const gotPomodorosList = (state, params) => {
  state.pomodorosList = params;
}

export const startedPomodoro = (state, params) => {
  console.log('starting pomodoro with params', params);
  state.pomodoro = params;
}
