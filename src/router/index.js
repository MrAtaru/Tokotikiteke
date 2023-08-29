import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

function cekToken(to, from, next) {
    var isAuthenticated = false;
        if (localStorage.getItem("access_token")) {
          isAuthenticated = true;
          next();
        } else {
          isAuthenticated = false;
          next("/login");
        }
      }
  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/product/:id",
      name: "SingleProduct",
      component: () => import("../views/SingleProduct.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/brand",
      name: "brand",
      component: () => import("../views/BrandView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
      beforeEnter: cekToken,
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/DetailCartView.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckOutView.vue"),
    },
    {
      path: "/order/:orderCode",
      name: "order",
      component: () => import("../views/BilingView.vue"),
      props: true,
    },
  ],
});

export default router;
