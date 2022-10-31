import { STORAGE_KEYS as storage } from "@/utils/constants";
import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: 'true',
  state: {
    players: JSON.parse(
      localStorage.getItem(storage.PLAYERS),
    ) || [],
    gameStarted: false,
  },
  mutations: {
    addPlayer: (state, name) => {
      state.players.push({
        id: uuidv4(),
        name,
        boundPlayer: null,
      });
      localStorage.setItem(storage.PLAYERS, JSON.stringify(state.players));
    },
    bindPlayers: (state, { sender, receiver }) => {
      state.players = state.players.map(player => player.id === sender.id ? {
        ...player,
        boundPlayer: receiver,
      } : player);
      localStorage.setItem(storage.PLAYERS, JSON.stringify(state.players));
    },
    clearPlayers: (state) => {
      state.players = [];
      localStorage.setItem(storage.PLAYERS, JSON.stringify(state.players));
    },
    clearBoundPlayers: (state) => {
      state.players = state.players.map(player => {
        player.boundPlayer = null
        return player;
      });
      localStorage.setItem(storage.PLAYERS, JSON.stringify(state.players));
    },
    setGameStarted: (state, value) => {
      state.gameStarted = !!value;
    },
  },
  actions: {
    addPlayer: ({ commit }, name) => {
      commit('addPlayer', name);
    },
    bindPlayers: ({ commit }, { sender, receiver }) => {
      commit('bindPlayers', { sender, receiver });
    },
    clearBoundPlayers: ({ commit }) => {
      commit('clearBoundPlayers');
    },
    clearPlayers: ({ commit }) => {
      commit('clearPlayers');
    },
    setGameStarted: ({ commit }, value) => {
      commit('setGameStarted', value);
    },
  },
}
