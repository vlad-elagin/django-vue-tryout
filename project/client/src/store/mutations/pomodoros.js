export const gotPomodorosList = (state, params) => {
  state.pomodorosList = params;
}

export const startedPomodoro = (state, params) => {
  state.pomodoro = params;
}

export const finishedPomodoro = (state) => {
  state.pomodoro = {};
}
