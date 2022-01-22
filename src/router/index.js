import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
<<<<<<< HEAD
    component: Home,
=======
    component: Home
>>>>>>> 9703dad8748c2692a7ccccd30995cb5247c4fb4b
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
<<<<<<< HEAD
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
=======
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
>>>>>>> 9703dad8748c2692a7ccccd30995cb5247c4fb4b
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
<<<<<<< HEAD
  routes,
=======
  routes
>>>>>>> 9703dad8748c2692a7ccccd30995cb5247c4fb4b
});

export default router;
