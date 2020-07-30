import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - IX42"
    }
  },
  {
    path: "/policy",
    name: "Policy",
    component: () => import("../views/Policy.vue"),
    meta: {
      title: "Policy - IX42"
    }
  },
  {
    path: "/rs-policy",
    name: "Policy",
    component: () => import("../views/RSPolicy.vue"),
    meta: {
      title: "RS Policy - IX42"
    }
  },
  {
    path: "/stats",
    name: "Stats",
    component: () => import("../views/Stats.vue"),
    meta: {
      title: "Stats - IX42"
    }
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../views/Members.vue"),
    meta: {
      title: "Members - IX42"
    }
  },
  {
    path: "/dn42",
    name: "DN42",
    component: () => import("../views/DN42.vue"),
    meta: {
      title: "DN42 - IX42"
    }
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/Pricing.vue"),
    meta: {
      title: "Pricing - IX42"
    }
  }
];

const router = new VueRouter({
  //mode: "history",
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
