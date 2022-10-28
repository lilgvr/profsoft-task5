<template>
  <div class="controls__button" :title="getTitle">
    <div :class="{disabled: disabled}">
      <div
          @click="onClick"
          :style="maskStyle"
      >
      </div>
    </div>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'ControlsButton',
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    onClick: {
      type: Function,
    },
    disabled: {
      type: Boolean,
    },
  },
  data: () => ({
    maskStyle: {
      maskImage: '',
      WebkitMaskImage: '',
    },
  }),
  computed: {
    getTitle() {
      return this.disabled ? 'Game is started' : this.title;
    },
  },
  mounted() {
    this.setMaskImage();
  },
  methods: {
    setMaskImage() {
      import(`../../../assets/images/${ this.image }.svg`).then(
          img => {
            this.maskStyle = {
              maskImage: `url(${ img.default })`,
              WebkitMaskImage: `url(${ img.default })`,
            }
          },
      )
    },
  },

}
</script>

<style scoped lang="scss">
@import "../../../index";

.controls__button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4vw;

  p {
    margin-top: 1vw;
  }

  & > div {
    $wh: 4vw;
    width: $wh;
    height: $wh;

    background-color: $secondary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    border: 2px solid $primary-color;
    transition: background-color .1s linear, border-color .1s linear;

    &:hover {
      background-color: $primary-color;
      border-color: $accent-color;
      cursor: pointer;
    }

    & > div {
      mask-repeat: no-repeat;
      background: $accent-color;
      width: 80%;
      height: 80%;
      margin: 0;
      mask-position: center;
    }
  }

  .disabled {
    &, & ~ p {
      user-select: none;
      opacity: .5;

      &:hover {
        cursor: not-allowed;
      }
    }

    &:hover {
      background-color: $secondary-color;
      border-color: $primary-color;
    }
  }
}
</style>
