import { groupBy } from 'underscore';
import tinytime from 'tinytime';

export default {
  name: 'PomodoroList',
  computed: {
    pomodoros() {
      return groupBy(
        this.$store.state.pomodorosList,
        pom => {
          const template = tinytime('{DD} {MMMM}');
          return template.render(new Date(pom.started_at));
        }
      );
    },
  },
  methods: {
    getPomodoros() {
      this.$store.dispatch('POMODOROS_GET');
    }
  },
  filters: {
    tinytime: date => tinytime('{H}:{mm}').render(new Date(date)),
  },
  mounted() {
    this.$store.dispatch('POMODOROS_GET');
  },
};
