<template>
  <div class="customization-ctr">
    <h2>Change theme</h2>
    <div>
      <theme-item
          :white="defaultColors.white"
          :secondary="defaultColors.secondary"
          :accent="defaultColors.accent"
          :primary="defaultColors.primary"
          :background="defaultColors.background"
          :theme-title="themes.DEFAULT"
      />
      <theme-item
          :white="christmasColors.white"
          :secondary="christmasColors.secondary"
          :accent="christmasColors.accent"
          :primary="christmasColors.primary"
          :background="christmasColors.background"
          :theme-title="themes.CHRISTMAS"
      />
    </div>
    <div>
      <theme-item
          :white="lightColors.white"
          :secondary="lightColors.secondary"
          :accent="lightColors.accent"
          :primary="lightColors.primary"
          :background="lightColors.background"
          :theme-title="themes.LIGHT"
      />
    </div>
  </div>
</template>

<script>
import ThemeItem from "@/components/customization/theme-item/ThemeItem";
import { THEMES } from "@/utils/constants";
import christmasColors from "../../assets/styles/themes/christmas.module.scss";
import defaultColors from "../../assets/styles/themes/default.module.scss";
import lightColors from "../../assets/styles/themes/light.module.scss";

export default {
  name: "CustomizationPage",
  components: { ThemeItem },
  data: () => ({
    defaultColors: defaultColors,
    lightColors: lightColors,
    christmasColors: christmasColors,
    themes: THEMES,
  }),
}
</script>

<style scoped lang="scss">
.customization-ctr {
  height: 100%;

  h2 {
    font-weight: 600;
    width: 100%;
    text-align: center;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  & > div:first-of-type {
    justify-content: space-around;
  }

  & > div:last-of-type {
    justify-content: center;
  }
}
</style>
