import Vue from "vue";
import VueRouter from "vue-router";
import Game from "../views/Game.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import MainMenu from "../views/MainMenu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/main-menu",
    name: "MainMenu",
    component: MainMenu,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
