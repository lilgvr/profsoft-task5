<template>
  <div @click="handleClick">
    {{ name }}
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
  methods: {
    handleClick() {
      this.$emit('custom-event', name);
    },
  },
}
</script>

<style scoped>

</style>
