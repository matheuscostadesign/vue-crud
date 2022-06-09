import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cadastrar",
    name: "cadastrar",
    //component: CreateView, // sem lazy-load (carrega tudo no app.js)
    component: () => import("../views/CreateView.vue"), // com lazy-load
  },
  {
    path: "/listar",
    name: "listar",
    component: () => import("../views/ReadView.vue"), // com lazy-load
  },
  {
    path: "/editar",
    name: "editar",
    component: () => import("../views/UpdateView.vue"), // com lazy-load
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
