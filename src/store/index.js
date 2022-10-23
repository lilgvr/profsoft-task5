import customization from "@/store/modules/customization";
import players from "@/store/modules/players";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    players,
    customization,
  },
});
