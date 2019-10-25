//角色路由，不同角色访问对应权限的路由
const roleRouter = [
  {
    path: '/pa',
    name: 'pa',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'pa',
      role: ['superadmin']
    },
    component: () => import(/* webpackChunkName: "pa" */ '@/pages/pa.vue'),
    children: [
      {
        path: 'pa01',
        name: 'pa01',
        meta: {
          dep: 3,
          needLogin: true,
          title: 'pa01',
          role: ['superadmin']
        },
        component: () => import(/* webpackChunkName: "pa01" */ '@/pages/pa01.vue')
      }
    ]
  },
  {
    path: '/pb',
    name: 'pb',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'pb',
      role: ['superadmin', 'admin']
    },
    component: () => import(/* webpackChunkName: "pb" */ '@/pages/pb.vue')
  },
  {
    path: '/pc',
    name: 'pc',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'pc',
      role: ['superadmin', 'admin', 'common']
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/pc.vue')
  },
  {
    path: '/loadmore',
    name: 'loadmore',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'loadmore',
      role: ['superadmin', 'admin', 'common']
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/loadmore.vue')
  },
  {
    path: '/loadmore2',
    name: 'loadmore2',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'loadmore2',
      role: ['superadmin', 'admin', 'common']
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/loadmore2.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'picker',
      role: ['superadmin', 'admin', 'common']
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/picker.vue')
  },
  {
    path: '/picker01',
    name: 'picker01',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'picker01',
      role: ['superadmin', 'admin', 'common']
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/picker01.vue')
  },
  {
    path: '/picker02',
    name: 'picker02',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'picker02',
      role: ['superadmin', 'admin', 'common']
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/picker02.vue')
  },
  {
    path: '/mobile',
    name: 'mobile',
    meta: {
      dep: 2,
      needLogin: true,
      title: 'mobile',
      role: ['superadmin', 'admin', 'common']
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/mobile.vue')
  }
];

export default roleRouter;
