export default {
  name: 'LoginForm',
  data() {
    return {
      login: '',
      pass: '',
    };
  },
  methods: {
    logMeInPlease() {
      console.log('logging');
      this.$emit('user:login', {
        login: this.login,
        pass: this.pass,
      });
      this.login = '';
      this.pass = '';
    }
  }
}
