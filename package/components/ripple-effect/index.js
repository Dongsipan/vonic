import RippleEffect from "./src/ripple-effect";
/* istanbul ignore next */
RippleEffect.install = function(Vue) {
  Vue.component(RippleEffect.name, RippleEffect);
};

export default RippleEffect;
