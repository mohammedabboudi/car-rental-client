import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/main/HomePage.vue";
import SigninPage from "../views/SigninPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import NotFoundPage from "../views/NotFoundPage.vue";


// const DashboardPage = () => import('../views/dashboard/DashboardPage.vue');

import DashboardPage from "@/views/dashboard/DashboardPage.vue";
import OrderSection from '@/views/dashboard/sections/OrderSection.vue';
import CarSection from '@/views/dashboard/sections/CarSection.vue';
import EmployeeSection from '@/views/dashboard/sections/EmployeeSection.vue';
import UserSection from '@/views/dashboard/sections/UserSection.vue';
import BrandSection from '@/views/dashboard/sections/BrandSection.vue';
import SettingSection from '@/views/dashboard/sections/SettingSection.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  { 
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    children: [
      { 
        path: 'orders',
        name: 'orders',
        component: OrderSection
      },
      { 
        path: 'cars',
        name: 'cars',
        component: CarSection
      },
      { 
        path: 'employees',
        name: 'employees',
        component: EmployeeSection
      },
      { 
        path: 'users',
        name: 'users',
        component: UserSection
      },
      { 
        path: 'brands',
        name: 'brands',
        component: BrandSection
      },
      { 
          path: 'settings',
          name: 'settings',
          component: SettingSection
      },
    ]
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
