export default {
  name: 'ModalContainer',
  computed: {
    modal() {
      return this.$store.state.modal;
    },
  },
  methods: {
    close() {
      this.$store.commit('modal:close');
    }
  }
}
