import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        dep: 1
      },
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        dep: 2
      },
      component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    }
  ]
});
