export default {
  namespaced: 'true',
  state: {
    currentTheme: 'default',
  },
  mutations: {
    changeTheme(state, title) {
      state.currentTheme = title;
    },
  },
  actions: {
    changeTheme({ commit }, title) {
      commit('changeTheme', title);
    },
  },
}
