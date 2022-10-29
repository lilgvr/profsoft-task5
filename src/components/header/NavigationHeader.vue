<template>
  <header :class="getThemeClass()">
    <h1 class="header__title">
      Secret Santa
    </h1>
    <router-link
        :to="linkPath"
        class="header__link"
    >
      <span>
        {{ linkName }}
      </span>
    </router-link>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavigationHeader",
  props: {
    linkName: {
      type: String,
    },
    linkPath: {
      type: String,
    },
  },
  computed: {
    ...mapState({
      currentTheme: state => state.customization.currentTheme,
    }),
  },
  methods: {
    getThemeClass() {
      return `${ this.currentTheme }-theme`;
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/themes/default.module";
@import "../../assets/styles/themes/christmas.module";
@import "../../assets/styles/themes/pastel.module";

header {
  display: flex;
  justify-content: space-around;
  padding: 1vw 0;
  margin-bottom: 2vw;

  h1, a {
    width: 50%;
    text-align: center;
  }

  h1 {
    font-size: 24pt;
    font-weight: 600;
  }
}
</style>
