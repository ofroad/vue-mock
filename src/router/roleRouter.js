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
  }
];

export default roleRouter;
