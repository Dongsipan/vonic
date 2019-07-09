// 为组件提供 install 方法，供组件对外按需引入
import Test from "./src/test";
Test.install = Vue => {
  Vue.component(Test.name, Test);
};
export default Test;
