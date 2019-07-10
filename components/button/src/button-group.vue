<template>
  <div
    class="spirit-button-group"
    :class="[
      auto ? 'spirit-button-group--auto' : '',
      gap ? 'spirit-button-group--gap' : '',
      round ? 'spirit-button-group--round' : '',
      scroll ? 'spirit-button-group--scroll' : '',
      split ? 'spirit-button-group--split' : ''
    ]"
  >
    <div v-if="scroll">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>
<script>
export default {
  name: "SButtonGroup",

  props: {
    auto: Boolean,
    gap: Boolean,
    round: Boolean,
    scroll: Boolean,
    split: Boolean
  }
};
</script>
