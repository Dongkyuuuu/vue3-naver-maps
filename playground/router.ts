import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./App.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./TestPage.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
