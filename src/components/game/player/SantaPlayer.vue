<template>
  <div class="santaPlayer">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "SantaPlayer",
  props: {
    name: {
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/index";

.santaPlayer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  max-height: 3em;

  &:not(:last-of-type) {
    border-bottom: 2px solid $primary-color;
  }

  p {
    color: $white;
    text-overflow: ellipsis;
  }
}
</style>
