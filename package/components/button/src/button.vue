<template>
  <!-- ion-color ios button button-small button-solid ion-activatable ion-focusable hydrated -->
  <button
    ref="button"
    class="vonic-button vonic-button--ios"
    :aria-disabled="disabled ? 'true' : null"
    :disabled="disabled"
    :class="[
      {
        [`button-${expand}`]: expand,
        [`button-${size}`]: true,
        [`button-${shape}`]: true,
        [`button-${fill}`]: fill,
        [`button-strong`]: strong,
        'ion-color': color,
        [`ion-color-${color}`]: color,
        'button-disabled': disabled,
        'ion-activatable': true,
        'ion-focusable': true,
        activated: activated
      }
    ]"
    @focus="onFocus"
    @blur="onBlur"
    @mousedown="activated = true"
    @mouseup="activated = false"
    @touchstart="activated = true"
    @touchend="activated = false"
  >
    <span class="button-inner">
      <slot name="icon-only"></slot>
      <slot name="start"></slot>
      <slot></slot>
      <slot name="end"></slot>
    </span>
  </button>
</template>

<script>
import "./style/button.scss";
export default {
  name: "VonButton",
  props: {
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color: {
      type: String,
      default: ""
    },
    /**
     * If `true`, the user cannot interact with the button.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Set to `"block"` for a full-width button or to `"full"` for a full-width button
     * without left and right borders.
     */
    expand: {
      type: String,
      default: ""
    },
    /**
     * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
     * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
     * a toolbar, where the default is `"clear"`.
     */
    fill: {
      type: String,
      default: "solid"
    },
    /**
     * The button shape.
     */
    shape: {
      type: String,
      default: "round"
    },
    size: {
      type: String,
      default: "small"
    },
    /**
     * If `true`, activates a button with a heavier font weight.
     */
    strong: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activated: false
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {
    onFocus() {
      this.$refs.button.focus();
    },
    onBlur() {
      this.$refs.button.blur();
    }
  }
};
</script>
