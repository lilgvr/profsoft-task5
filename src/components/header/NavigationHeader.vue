<template>
  <header>
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
}
</script>

<style scoped lang="scss">
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
