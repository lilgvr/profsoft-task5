<template>
  <div class="addPlayer">
    <div class="addPlayer__input">
      <input
          v-model="playerName"
          placeholder="Name"
          type="text"
          ref="playerNameInput"
          @keyup.enter="createPlayer"
      >
      <button @click="createPlayer">
        Add
      </button>
    </div>

  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddPlayer",
  data: () => ({
    playerName: '',
  }),
  methods: {
    ...mapActions('players', ['addPlayer']),
    createPlayer() {
      if (!this.playerName) return;

      this.addPlayer(this.playerName);
      this.$refs.playerNameInput.value = null;
      this.playerName = null;
      this.$refs.playerNameInput.focus();
    },
  },
}
</script>

<style scoped lang="scss">

.addPlayer {
  &__input {
    display: flex;
    flex-direction: column;

    input {
      font-size: 14pt;
      border-radius: 5px;
      border: 2px solid black;
      padding: 4px;
      font-family: "Saira Regular", sans-serif;
      margin-bottom: 1vw;

      transition: border-color .1s linear;

      &:focus {
        outline: none;
      }
    }

    button {
      font-size: 14pt;
      border-radius: 5px;
      padding: 4px;
      transition: background-color .1s linear, border-color .1s linear;

      &:hover {

        cursor: pointer;
      }
    }
  }
}
</style>
