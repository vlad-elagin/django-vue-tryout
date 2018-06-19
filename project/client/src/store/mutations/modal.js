export const modalOpen = (state, params) => {
  state.modal = {
    ...params,
  };
};

export const modalClose = state => state.modal = null;
