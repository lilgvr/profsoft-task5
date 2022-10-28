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
      <div
          class="gameStateTable__content"
      >
        <div
            class="gameStateTable__row"
            v-for="[player1, player2] in boundPlayers"
            :key="player1.id"
        >
          <p>{{ player1.name }}</p>
          <p>{{ player2.name }}</p>
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
}
</script>

<style lang="scss">
@import "../../../index";
@import "../../../assets/styles/mixins";

.gameState {
  width: 50%;

  &Table {
    display: flex;
    flex-direction: column;
    border: 2px solid $primary-color;
    border-radius: 7px;
    height: 80%;
    width: 60%;

    &__content {
      overflow-x: hidden;
      overflow-y: auto;
      border-radius: 0 0 7px 7px;
      background-color: $secondary-color;
      flex-grow: 2;

      @include customScroll;
    }

    &__row {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border-bottom: 1px solid $primary-color;

      p, h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        text-align: center;
        height: 3vw;
      }

      p {
        color: $white;
        font-size: 14pt;

        &:first-of-type {
          border-right: 1px solid $primary-color;
        }
      }
    }

    &__header {
      flex-grow: 0;
      background-color: $white;
      border-radius: 7px 7px 0 0;
      border-bottom: 2px solid $primary-color;

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
