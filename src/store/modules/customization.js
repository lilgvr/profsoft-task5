export default {
  namespaced: 'true',
  state: {
    currentTheme: localStorage.getItem('secretSanta/currentTheme') || 'default',
  },
  mutations: {
    changeTheme(state, theme) {
      state.currentTheme = theme.toLowerCase();
      localStorage.setItem('secretSanta/currentTheme', state.currentTheme);
    },
  },
  actions: {
    changeTheme({ commit }, theme) {
      commit('changeTheme', theme);
    },
  },
}
