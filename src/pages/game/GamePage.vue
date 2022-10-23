<template>
  <div>
<!--    <input
        v-model="playerName"
        type="text"
    >
    <button @click="createPlayer">
      Add Player
    </button>
    <div v-if="players.length">
      <h3>Players:</h3>
      <santa-player
          v-for="player in players"
          :key="player.id"
          :name="player.name"
          @custom-event="onEmit"
      />
    </div>-->
  </div>
</template>

<script>
import SantaPlayer from "@/components/game/player/SantaPlayer";
import { mapActions, mapState } from "vuex";

export default {
  name: 'GamePage',
  components: { SantaPlayer },

  data: () => ({
    playerName: '',
    count: 0,
  }),
  computed: {
    ...mapState({
      players: state => state.players.players,
    }),
  },
  methods: {
    ...mapActions('players', ['addPlayer']),
    createPlayer() {
      if (this.playerName) this.addPlayer(this.playerName)
    },
    onEmit(data) {
      console.log(data)
    },
  },
}
</script>

<style scoped>

</style>
