import Test from "./test";
const components = [Test];
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map(component => Vue.use(component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
