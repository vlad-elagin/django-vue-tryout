import getPomodoroDuration from '@helpers/getPomodoroDuration';

export default {
  name: 'NewPomodoro',

  // // vuex store values
  // computed: {
  //   _duration() {
  //     return getPomodoroDuration(this.$store.state.pomodoro.started_at)
  //   },
    // _progress() {
    //   const pom = this.$store.state.pomodoro;
    //   return getPomodoroDuration(pom.started_at, 's') * 100 / (pom.duration * 60);
    // }
  // },

  // component methods
  methods: {
    onPomodoroStop(event) {
      event.preventDefault();
      this.stopTimer();
    },
    stopTimer(stop = false) {
      if (this.updateInterval) {
        clearInterval(this.updateInterval);
        this.$store.dispatch('POMODOROS_FINISH', { status: !stop ? 'stopped' : 'finished' });
      }
    }
  },

  // component data stub
  data() {
    return {
      duration: {
        minutes: 0,
        seconds: 0
      },
      progress: 0
    };
  },

  // lifecycle hooks
  mounted() {
    // reassign computed to data to be modified by timer
    const pom = this.$store.state.pomodoro;
    this.duration = getPomodoroDuration(pom.started_at);
    this.progress = Math.trunc(getPomodoroDuration(pom.started_at, 's') * 100 / (pom.duration * 60));

    if (!this.updateInterval) {
      this.updateInterval = setInterval(() => {
        // check if pomodoro is finished
        const progress = Math.trunc(getPomodoroDuration(pom.started_at, 's') * 100 / (pom.duration * 60));

        if (progress === 100) {
          // pomodoro is finished!
          this.stopTimer(true);
        }

        // update values
        this.duration = getPomodoroDuration(pom.started_at);
        this.progress = progress;
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.updateInterval);
  },

  // misc
  filters: {
    //tinytime: date => tinytime('{H}:{mm}').render(new Date(date)),
    duration: duration => {
      let minutes = duration.minutes.toString();
      if (minutes.length === 1) {
        minutes = '0' + minutes;
      }
      let seconds = duration.seconds.toString();
      if (seconds.length === 1) {
        seconds = '0' + seconds;
      }
      return `${minutes}:${seconds}`;
    }
  },
}
