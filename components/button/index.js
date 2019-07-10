import Button from "./src/button";
import ButtonGroup from "./src/button-group";

Button.Group = ButtonGroup;

/* istanbul ignore next */
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default Button;
