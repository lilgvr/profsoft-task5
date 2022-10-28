<template>
  <div class="controls">
    <h2>Game controls</h2>
    <div>
      <controls-button
          :image="startImage"
          :title="startText"
          :on-click="handleStartClick"
      />
      <controls-button
          :image="reshuffleImage"
          :title="reshuffleText"
          :on-click="handleReshuffleClick"
      />
    </div>
  </div>
</template>

<script>
import ControlsButton from "@/components/game/controls/ControlsButton";
import { mapActions, mapState } from "vuex";

export default {
  name: "GameControls",
  components: { ControlsButton },
  data: () => ({
    startText: 'Start game',
    reshuffleText: 'Reshuffle',
    startImage: 'play',
    reshuffleImage: 'reload',
  }),
  computed: {
    ...mapState({
      players: state => state.players.players,
      boundPlayers: state => state.players.boundPlayers,
    }),
  },
  methods: {
    ...mapActions('players', ['bindPlayers']),
    handleStartClick() {

      this.bindPlayers({
        firstPlayerId: this.players[0].id,
        secondPlayerId: this.players[1].id,
      });

      console.log(this.boundPlayers)
    },
    handleReshuffleClick() {

    },
  },
}
</script>

<style scoped lang="scss">
.controls {
  width: 50%;
  height: 30%;
  margin-bottom: 6vw;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-around;
  }

  h2 {
    font-weight: 600;
  }
}
</style>
