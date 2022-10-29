export default {
  namespaced: 'true',
  state: {
    currentTheme: 'default',
  },
  mutations: {
    changeTheme(state, theme) {
      state.currentTheme = theme.toLowerCase();
    },
  },
  actions: {
    changeTheme({ commit }, theme) {
      commit('changeTheme', theme);
    },
  },
}
