export default {
  name: 'NewPomodoro',
  data() {
    return {};
  },
  methods: {
    onPomodoroStop(event) {
      event.preventDefault();
      console.log('stopping things');
    }
  }
}
