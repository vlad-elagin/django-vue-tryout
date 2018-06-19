export const modalOpen = (context, data) => {
  context.commit('modal:open', data);
  // auto hide modal
  if (data.autoDismiss) {
    setTimeout(() => {
      context.commit('modal:close')
    }, data.autoDismiss * 1000);
  }
};
