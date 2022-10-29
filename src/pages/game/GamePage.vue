<template>
  <div
      class="gamePageCtr"
      :class="getThemeClass()"
  >
    <div class="controlsList">
      <game-controls/>
      <div class="addPlayer">
        <player-list/>
        <add-player/>
      </div>
    </div>
    <game-state/>
  </div>
</template>

<script>
import AddPlayer from "@/components/game/add-player/AddPlayer";
import GameControls from "@/components/game/controls/GameControls";
import GameState from "@/components/game/game-state/GameState";
import PlayerList from "@/components/game/player-list/PlayerList";
import { mapState } from "vuex";

export default {
  name: 'GamePage',
  components: { PlayerList, AddPlayer, GameControls, GameState },
  computed: {
    ...mapState({
      currentTheme: state => state.customization.currentTheme,
    }),
  },
  methods: {
    getThemeClass() {
      return `${ this.currentTheme }-theme`;
    },
  },
}
</script>

<style scoped lang="scss">
.gamePageCtr {
  padding-left: 2vw;
  display: flex;
  max-height: 100vh;

  .controlsList {
    height: 60%;
    width: 50%;
    max-height: 100vh;

    .addPlayer {
      display: flex;
    }
  }
}
</style>
