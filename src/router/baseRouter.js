//基本路由，所有角色都可以访问
const baseRouter = [
  {
    path: '/',
    name: 'home',
    meta: {
      dep: 1,
      needLogin: true,
      title: '首页'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      dep: 2,
      needLogin: false,
      title: '关于我们'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      dep: 2,
      needLogin: true,
      title: '联系我们'
    },
    component: () => import(/* webpackChunkName: "contact" */ '@/pages/contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      dep: 2,
      needLogin: false,
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login.vue')
  },
  {
    path: '*',
    name: 'p404',
    meta: {
      dep: 2,
      needLogin: false,
      title: '404'
    },
    component: () => import(/* webpackChunkName: "404" */ '@/pages/p404.vue')
  }
];

export default baseRouter;
