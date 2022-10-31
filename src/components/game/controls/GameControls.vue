<template>
  <div class="controls">
    <h2>Game controls</h2>
    <div>
      <controls-button
          :image="startImage"
          :title="startText"
          :on-click="handleStartClick"
          :disabled="gameStarted || !players.length"
      />
      <controls-button
          :image="reshuffleImage"
          :title="reshuffleText"
          :on-click="handleReshuffleClick"
          :disabled="!gameStarted"
      />
      <controls-button
          :image="reshuffleImage"
          :title="clearText"
          :on-click="handleClearPlayersCLick"
          :disabled="false"
      />
      <controls-button
          :image="stopImage"
          :title="stopText"
          :on-click="handleStopClick"
          :disabled="!gameStarted"
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
    clearText: 'Clear players',
    startImage: 'play',
    reshuffleImage: 'reload',
    stopImage: 'stop',
    stopText: 'Stop',
  }),
  computed: {
    ...mapState({
      players: state => state.players.players,
      gameStarted: state => state.players.gameStarted,
    }),
  },
  methods: {
    ...mapActions(
        'players',
        ['bindPlayers', 'clearBoundPlayers', 'setGameStarted', 'clearPlayers'],
    ),
    handleStartClick() {
      if (this.gameStarted) return;

      this.startGame();
      this.setGameStarted(true);
    },
    handleReshuffleClick() {
      if (!this.gameStarted) return;

      this.clearBoundPlayers();
      this.startGame();
    },
    handleClearPlayersCLick() {
      this.clearPlayers();
      this.setGameStarted(false);
    },
    handleStopClick() {
      if (!this.gameStarted) return;

      this.clearBoundPlayers();
      this.setGameStarted(false);
    },

    startGame() {
      const getRandomIndex = (max) => Math.floor(Math.random() * max);
      let receivers = [...this.players];

      for (let i = 0; i < this.players.length; i++) {
        let randomIndex = getRandomIndex(receivers.length);
        const currentPlayer = this.players[i];

        while (currentPlayer.id === receivers[randomIndex].id) {
          randomIndex = getRandomIndex(receivers.length);
        }

        const randomPlayer = receivers[randomIndex];
        receivers.splice(randomIndex, 1);

        this.bindPlayers({
          sender: {
            id: currentPlayer.id,
            name: currentPlayer.name,
            boundPlayer: randomPlayer,
          },
          receiver: {
            id: randomPlayer.id,
            name: randomPlayer.name,
            boundPlayer: currentPlayer,
          },
        });
      }
    },
  },
  mounted() {
    if (this.players.some(player => player.boundPlayer !== null)) {
      this.setGameStarted(true);
    }
  },
}
</script>

<style scoped lang="scss">
.controls {
  width: 80%;
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
