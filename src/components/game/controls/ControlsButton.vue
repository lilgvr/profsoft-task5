<template>
  <div class="controls__button" :title="getTitle">
    <div :class="{disabled: this.disabled}">
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

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    transition: background-color .1s linear, border-color .1s linear;

    &:hover {
      cursor: pointer;
    }

    & > div {
      mask-repeat: no-repeat;
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
  }
}
</style>
