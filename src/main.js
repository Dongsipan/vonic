import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Spirit from "./../components";
import "./../components/style";

Vue.config.productionTip = false;

Vue.use(Spirit);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
