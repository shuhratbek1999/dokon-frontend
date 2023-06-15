import App from './App.vue'
import router from './router'
import Vue from 'vue'
import axios from "axios";
import './style.scss'
import VueAxios from "vue-axios";
import { store } from "./store";
import { BAlert } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.component('b-alert', BAlert)
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
window.axios = require("axios");
window.axios.defaults.baseURL = "http://localhost:3000/api/v1/admin-app/";

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)


window.axios.interceptors.request.use(req => {
  req.headers.contentType = "application/json";
  req.headers.Authorization = "Bearer " + localStorage.getItem("token");

  return req;
});
window.axios.interceptors.response.use(
  response => {
    if (response.data.error) {
      if (response.data.error_code == 401) {
        router.push("/login");
      }
      store.state.errors = response.data.message;
    } else {
      return response;
    }
  },
  error => {
    if (error.response.status == 401) {
      store.state.errors = error.response.data.message;
      router.push("/login");
    } else if (error.response.status == 400) {
      store.state.errors = error.response.data.message;
    } else if (error.response.status == 404) {
      router.push("/404");
      store.state.errorr = error.response.data.message;
    } else {
      store.state.errors = error.response.data.message;
    }
    return Promise.reject(error);
  }
);
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
    el: "#app",
    render: h => h(App),
    router,
    store
  }); 
