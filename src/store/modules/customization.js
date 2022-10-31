import { STORAGE_KEYS as storage, THEMES } from "@/utils/constants";

export default {
  namespaced: 'true',
  state: {
    currentTheme: localStorage.getItem(storage.THEME) || THEMES.DEFAULT.toLowerCase(),
  },
  mutations: {
    changeTheme(state, theme) {
      state.currentTheme = theme.toLowerCase();
      localStorage.setItem(storage.THEME, state.currentTheme);
    },
  },
  actions: {
    changeTheme({ commit }, theme) {
      commit('changeTheme', theme);
    },
  },
}
