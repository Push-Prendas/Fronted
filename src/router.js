import Vue from "vue";
import VueRouter from 'vue-router'

import Login from "./views/Login.vue";
import Hellow from "./views/Dashboard.vue";

Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/HellowWorld/:rol/:username",
      name: "Hellow",
      component: Hellow,
      props: true
    }
  ];




  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;