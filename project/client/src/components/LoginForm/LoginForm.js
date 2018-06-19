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
      const { login, pass } = this;
      this.$store.dispatch('USER_SIGN_IN', {
        username: login,
        password: pass,
      });

      this.login = '';
      this.pass = '';
    }
  }
}
