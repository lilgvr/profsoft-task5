<template>
  <div>
    <navigation-header
        :link-name="linkName"
        :link-path="linkPath"
    />
    <router-view/>
  </div>
</template>

<script>
import NavigationHeader from "@/components/header/NavigationHeader";

export default {
  name: "MainLayout",
  components: { NavigationHeader },
  data: () => ({
    linkName: '',
    linkPath: '',
  }),
  created() {
    this.setHeaderData(this.$route.meta.name, this.$route.meta.path);
  },
  beforeUpdate() {
    this.setHeaderData(this.$route.meta.name, this.$route.meta.path);
  },
  methods: {
    setHeaderData(name, path) {
      this.linkName = name;
      this.linkPath = path;
    },
  },
}
</script>

<style scoped>

</style>
