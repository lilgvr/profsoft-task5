<template>
  <div class="playersList">
    <h3>Name</h3>
    <div v-if="players.length">
      <santa-player
          v-for="player in players"
          :key="player.id"
          :name="player.name"
      />
    </div>
  </div>
</template>

<script>
import SantaPlayer from "@/components/game/player/SantaPlayer";
import { mapState } from "vuex";

export default {
  name: "PlayerList",
  components: { SantaPlayer },
  computed: {
    ...mapState({
      players: state => state.players.players,
    }),
  },
}
</script>

<style scoped lang="scss">
.playersList {
  width: 30%;
  border-radius: 10px;
  height: 25vw;
  margin-right: 4vw;
  display: flex;
  flex-direction: column;

  h3 {
    flex-grow: 0;
    width: 100%;
    height: 5%;
    display: block;
    font-size: 14pt;
    font-weight: 600;
    text-align: center;
    padding: 10px 0;
    border-radius: 10px 10px 0 0;
  }

  & > div {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
