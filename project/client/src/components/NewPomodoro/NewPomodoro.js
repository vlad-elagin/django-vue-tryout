export default {
  name: 'NewPomodoro',
  data() {
    return {
      durations: ['2', '20', '25', '30', '35', '40'],
      duration: '30',
    };
  },
  methods: {
    onDurationSelect(newDuration) {
      // sometimes arg is null, dunno why
      this.duration = newDuration;
    },
    onPomodoroStart(event) {
      event.preventDefault();
      this.$store.dispatch('POMODOROS_START', { duration: this.duration });
    }
  }
}
