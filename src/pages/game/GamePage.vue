<template>
  <div class="gamePageCtr">
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

export default {
  name: 'GamePage',
  components: { PlayerList, AddPlayer, GameControls, GameState },
}
</script>

<style scoped lang="scss">
.gamePageCtr {
  padding-left: 2vw;
  display: flex;

  .controlsList {
    height: 60%;
    width: 50%;

    .addPlayer {
      display: flex;
    }
  }
}
</style>
