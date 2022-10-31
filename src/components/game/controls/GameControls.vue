<template>
  <div class="controls">
    <h2>Game controls</h2>
    <div>
      <controls-button
          :image="startImage"
          :title="startText"
          :on-click="handleStartClick"
          :disabled="gameStarted"
      />
      <controls-button
          :image="reshuffleImage"
          :title="reshuffleText"
          :on-click="handleReshuffleClick"
          :disabled="false"
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
      gameStarted: state => state.players.gameStarted,
    }),
  },
  methods: {
    ...mapActions('players', ['bindPlayers', 'clearBoundPlayers', 'setGameStarted']),
    handleStartClick() {
      if (this.gameStarted) return;

      this.startGame();
      this.setGameStarted(true);

      console.log(this.boundPlayers)
    },
    handleReshuffleClick() {
      if (!this.gameStarted) return;

      this.clearBoundPlayers();
      this.startGame();
    },
    startGame() {
      const getRandomIndex = () => Math.floor(Math.random() * this.players.length);

      const
          isReceiver = (player) => {
            const values = this.boundPlayers.values();
            let next = values.next();

            while (!next.done) {
              if (next.value.id === player.id) return true;
              next = values.next();
            }

            return false;
          }

      for (let i = 0; i < this.players.length; i++) {
        let randomIndex = getRandomIndex();
        const current = this.players[i];

        while (randomIndex === i) randomIndex = getRandomIndex();

        let randomPlayer = this.players[randomIndex];

        while (isReceiver(randomPlayer)) {
          randomIndex = getRandomIndex();
          randomPlayer = this.players[randomIndex];
        }

        this.bindPlayers({
          firstPlayer: {
            id: current.id,
            name: current.name,
          },
          secondPlayer: {
            id: randomPlayer.id,
            name: randomPlayer.name,
          },
        });
      }
    },
  },
  mounted() {
    if (this.boundPlayers.size) {
      this.setGameStarted(true);
    }
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
