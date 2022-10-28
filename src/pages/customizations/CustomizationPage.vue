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
    console.log(this.currentTheme)
  },
}
</script>

<style scoped lang="scss">

</style>
