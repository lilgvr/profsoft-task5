<template>
  <div>
    Customization
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CustomizationPage",
  computed: {
    ...mapState({
      currentTheme: state => state.customization.currentTheme,
    }),
  },
  mounted() {
  },
}
</script>

<style scoped lang="scss">

</style>
