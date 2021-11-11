import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    // component: Home,
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Home/Home.vue"),
    children: [
      {
        name: "/home/homes",
        path: "homes",
        component: () => import(/* webpackChunkName: "about" */ "../views/Home/Home.vue"),
      },
      {
        name: "/home/table",
        path: "table",
        component: () => import(/* webpackChunkName: "about" */ "../views/text/index.vue"),
      },
      {
        name: "/home/sort",
        path: "table",
        component: () => import(/* webpackChunkName: "about" */ "../views/Sort/index.vue"),
      },
      {
        name: "/home/zip",
        path: "table",
        component: () => import(/* webpackChunkName: "about" */ "../views/zip/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
