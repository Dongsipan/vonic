import "./style";
import Test from "./test";
import { default as Button } from "./button";
const components = [Test, Button];
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
