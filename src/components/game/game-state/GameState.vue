<template>
  <div class="gameState">
    <div>
      <h2>Game state</h2>
    </div>
    <div class="gameStateTable">
      <div class="gameStateTable__row gameStateTable__header">
        <h3>Gift Sender</h3>
        <h3>Gift Receiver</h3>
      </div>
      <div class="gameStateTable__content">
        <div
            class="gameStateTable__row"
            v-for="[key, value] in boundPlayers"
            :key="key.id"
        >
          <p>{{ key.name }}</p>
          <p>{{ value.name }}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GameState",
  computed: {
    ...mapState({
      players: state => state.players.players,
      boundPlayers: state => state.players.boundPlayers,
    }),
  },
  updated() {
    console.log('GameState::', this.boundPlayers)
  },
}
</script>

<style lang="scss">

.gameState {
  width: 50%;
  max-height: 85vh;

  &Table {
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    height: 65%;
    max-height: 65%;
    width: 60%;

    &__content {
      overflow-x: hidden;
      overflow-y: auto;
      border-radius: 0 0 7px 7px;
      flex-grow: 1;
    }

    &__row {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      p, h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        text-align: center;
        height: 3vw;
      }

      p {
        font-size: 14pt;
      }
    }

    &__header {
      flex-grow: 0;
      border-radius: 7px 7px 0 0;

      h3 {
        font-weight: 600;
        font-size: 14pt;
      }
    }
  }


  h2 {
    font-weight: 600;
    margin-bottom: 4vw;
  }
}
</style>
