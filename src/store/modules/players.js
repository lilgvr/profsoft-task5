import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: 'true',
  state: {
    players: [],
    boundPlayers: Map,
  },
  mutations: {
    addPlayer: (state, name) => {
      state.players.push({
        id: uuidv4(),
        name,
        // boundPLayerId: '',
      })
    },
    bindPlayers: (state, firstId, secondId) => {
      console.log(state, firstId, secondId);
    },
  },
  actions: {
    addPlayer: ({ commit }, name) => {
      commit('addPlayer', name);
    },
    bindPlayers: ({ commit }, firstId, secondId) => {
      commit('bindPlayers', firstId, secondId);
    },
  },
  getters: {},
}
