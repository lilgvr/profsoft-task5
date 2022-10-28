import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: 'true',
  state: {
    players: JSON.parse(
      localStorage.getItem('secretSanta/players'),
    ) || [],
    boundPlayers: new Map(
      JSON.parse(localStorage.getItem('secretSanta/boundPlayers')),
    ),
  },
  mutations: {
    addPlayer: (state, name) => {
      state.players.push({
        id: uuidv4(),
        name,
      });
      localStorage.setItem('secretSanta/players', JSON.stringify(state.players));
    },
    bindPlayers: (state, { firstPlayerId, secondPlayerId }) => {
      state.boundPlayers.set(firstPlayerId, secondPlayerId);
      // localStorage.setItem('secretSanta/boundPlayers', JSON.stringify(Array.from(state.boundPlayers.entries())));
    },

  },
  actions: {
    addPlayer: ({ commit }, name) => {
      commit('addPlayer', name);
    },
    bindPlayers: ({ commit }, { firstPlayerId, secondPlayerId }) => {
      commit('bindPlayers', { firstPlayerId, secondPlayerId });
    },
  },
  getters: {},
}
