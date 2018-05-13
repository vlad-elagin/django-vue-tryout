export default {
  name: 'SignUpForm',
  data() {
    return {
      login: '',
      pass: '',
      confirmPass: '',
    };
  },
  methods: {
    signMeUpPlease() {
      const { login, pass, confirmPass } = this;
      this.$store.dispatch('USER_SIGN_UP', {
        login,
        pass,
        confirmPass,
      });
      this.login = '';
      this.pass = '';
      this.confirmPass = '';
    }
  }
}
