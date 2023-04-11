import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/main/HomePage.vue";
import DashboardPage from "../views/dashboard/DashboardPage.vue"
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardPage,
  },
  {
    path: "/cars",
    name: "cars",
    // route level code-splitting
    // this generates a separate chunk (cars.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cars" */ "../views/main/cars/CarsPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
