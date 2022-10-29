<template>
  <div
      @click="handleClick"
      class="theme-item-ctr"
  >
    <div>
      <div :style="{'background-color': white}"></div>
      <div :style="{'background-color': secondary}"></div>
      <div :style="{'background-color': accent}"></div>
      <div :style="{'background-color': primary}"></div>
      <div :style="{'background-color': background}"></div>
    </div>
    <h3>{{ themeTitle }}</h3>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ThemeItem",
  props: {
    themeTitle: {
      type: String,
    },
    white: {
      type: String,
    },
    secondary: {
      type: String,
    },
    accent: {
      type: String,
    },
    primary: {
      type: String,
    },
    background: {
      type: String,
    },
  },
  computed: {
    ...mapState({
      currentTheme: state => state.customization.currentTheme,
    }),
  },
  methods: {
    ...mapActions('customization', ['changeTheme']),
    handleClick() {
      if (this.themeTitle.toLowerCase() === this.currentTheme) return;

      this.changeTheme(this.themeTitle);
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/themes/default.module";

.theme-item-ctr {
  & > div {
    display: flex;
    flex-direction: row;
    border-radius: 7px;
    border: 1px solid $default-primary;
    margin-top: 6vw;

    &:hover {
      cursor: pointer;
    }

    div {
      width: 4vw;
      height: 6vw;

      &:first-of-type {
        border-radius: 7px 0 0 7px;
      }

      &:last-of-type {
        border-radius: 0 7px 7px 0;
      }
    }
  }

  h3 {
    font-weight: 600;
    width: 100%;
    text-align: center;
    font-size: 16pt;
    margin-top: 1vw;
  }
}
</style>
