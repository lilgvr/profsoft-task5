<template>
  <div id="app" :class="`${currentTheme}-theme`">
    <router-view/>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState({
      currentTheme: state => state.customization.currentTheme,
    }),
  },
}
</script>

<style scoped lang="scss">
#app {
  height: 100vh;
}
</style>
