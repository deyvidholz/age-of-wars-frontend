import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

/* Socket.io Extended */
// import VueSocketIOExt from "vue-socket.io-extended";
// import io from "socket.io-client";

// const socket = io("localhost:3000");
// Vue.use(VueSocketIOExt, socket, { store });

import "./plugins/axios";
import "./assets/css/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
