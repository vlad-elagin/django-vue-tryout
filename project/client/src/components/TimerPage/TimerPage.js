import NewPomodoro from '@components/NewPomodoro/NewPomodoro.vue';
import CurrentPomodoro from '@components/CurrentPomodoro/CurrentPomodoro.vue';
import PomodoroList from '@components/PomodoroList/PomodoroList.vue';

export default {
  name: 'TimerPage',
  components: {
    NewPomodoro,
    CurrentPomodoro,
    PomodoroList,
  },
  computed: {
    pomodoro() {
      return this.$store.state.pomodoro.id || null;
    },
  },
};
