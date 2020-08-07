import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/locations",
    name: "Locations",
    component: () => import("../views/Locations.vue")
  },
  {
    path: "/policy",
    name: "Policy",
    component: () => import("../views/Policy.vue")
  },
  {
    path: "/rs-policy",
    name: "RS Policy",
    component: () => import("../views/RSPolicy.vue")
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/Pricing.vue")
  },
  {
    path: "/stats/:loc",
    name: "Statistics",
    component: () => import("../views/Stats.vue")
  },
  {
    path: "/members/:loc",
    name: "Members",
    component: () => import("../views/Members.vue")
  },
  {
    path: "/services/:loc",
    name: "Services",
    component: () => import("../views/Services.vue")
  },
  {
    path: "/dn42",
    name: "DN42",
    component: () => import("../views/DN42.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
