import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import axios from "axios";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
