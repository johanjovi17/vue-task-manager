import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Tasks from "../pages/Tasks.vue";
import About from "../pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/tasks", component: Tasks },
  { path: "/about", component: About },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
