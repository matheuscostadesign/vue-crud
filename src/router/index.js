import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    //component: CreateView, // sem lazy-load (carrega tudo no app.js)
    component: () => import("../views/CreateView.vue"), // com lazy-load
  },
  {
    path: "/read",
    name: "read",
    component: () => import("../views/ReadView.vue"), // com lazy-load
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
