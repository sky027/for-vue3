import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      a: 1,
      b: 2,
    },
  },
  {
    path: "/tab-test",
    name: "Tabs",
    component: () => import("../views/test-tab/tab-home.vue"),
  },
  {
    path: "/lang-test",
    name: "language",
    component: () => import("../views/language-select.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
