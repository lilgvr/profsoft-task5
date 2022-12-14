import router from "@/router";
import store from "@/store";
import Vue from 'vue'
import App from './App.vue'
import "./assets/styles/index.scss";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
