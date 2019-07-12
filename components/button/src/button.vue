<template>
  <button
    class="spirit-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'spirit-button--' + type : '',
      buttonSize ? 'spirit-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-round': round,
        'is-circle': circle,
        'is-rectangle': rectangle,
        'is-primary': primary,
        'is-success': success,
        'is-info': info,
        'is-warning': warning,
        'is-danger': danger
      }
    ]"
  >
    <i class="iconfont icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "SButton",

  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    rectangle: Boolean,
    primary: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    danger: Boolean
  },

  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
