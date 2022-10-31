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
    gameStarted: false,
  },
  mutations: {
    addPlayer: (state, name) => {
      state.players.push({
        id: uuidv4(),
        name,
      });
      localStorage.setItem('secretSanta/players', JSON.stringify(state.players));
    },
    bindPlayers: (state, { firstPlayer, secondPlayer }) => {
      state.boundPlayers.set(firstPlayer, secondPlayer);
      localStorage.setItem('secretSanta/boundPlayers', JSON.stringify(Array.from(state.boundPlayers.entries())));
      state.gameStarted = true;
    },
    clearBoundPlayers: (state) => {
      state.boundPlayers.clear();
    },
    setGameStarted: (state, value) => {
      state.gameStarted = !!value;
    },
  },
  actions: {
    addPlayer: ({ commit }, name) => {
      commit('addPlayer', name);
    },
    bindPlayers: ({ commit }, { firstPlayer, secondPlayer }) => {
      commit('bindPlayers', { firstPlayer, secondPlayer });
    },
    clearBoundPlayers: ({ commit }) => {
      commit('clearBoundPlayers');
    },
    setGameStarted: ({ commit }, value) => {
      commit('setGameStarted', value);
    },
  },
}
