export default {
  name: 'Header',
  computed: {
    user() {
      return this.$store.state.user.username || null;
    },
  },
  methods: {
    logMeOutPlease() {
      // const { login, pass } = this;
      // this.$store.dispatch('USER_SIGN_IN', {
      //   username: login,
      //   password: pass,
      // });
      //
      // this.login = '';
      // this.pass = '';
      this.$store.dispatch('USER_SIGN_OUT');
    }
  }
}
