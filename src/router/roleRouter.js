function dynamicPropsFn(route) {
    const now = new Date();
    return {
        name: now.getFullYear() + parseInt(route.params.years) + '!'
    };
}

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
    },
    {
        path: '/jsonp',
        name: 'jsonp',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'jsonp',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "pc" */ '@/pages/jsonp.vue')
    },
    {
        path: '/router-params/:name',
        name: 'router-params',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'router-params',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "pc" */ '@/pages/router-params.vue'),
        // Pass route.params to props
        props: true
    },
    {
        path: '/router-params-static',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'router-params-static',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "pc" */ '@/pages/router-params.vue'),
        // 传static values
        props: { name: 'world' }
    },
    {
        path: '/router-params-query',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'router-params-query',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "pc" */ '@/pages/router-params.vue'),
        // 结合route自定义传值
        //URL /router-params-query?q=vue123&age=100 会将 {name: 'vue123',age:'100'} 作为属性传递给 路由 组件的$attrs
        //如果组件的props里面定义了对应的接收属性，则直接传过去，没定义接收的传给组件的$attrs
        //此例子中name为已定义接收的属性，age为未定义接收的属性
        props: route => ({ name: route.query.q, age: route.query.age })
    },
    {
        path: '/router-params-dynamic/:years',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'router-params-dynamic',
            role: ['superadmin', 'admin', 'common']
        },
        //定义别名
        alias: '/mobile-111/:years',
        component: () => import(/* webpackChunkName: "pc" */ '@/pages/router-params.vue'),
        // 结合route自定义传值
        //URL /router-params-dynamic/2008 通过对route.params.years作为基础进行加工 作为属性传递给 路由 组件
        props: dynamicPropsFn
    },
    {
        path: '/skill-001',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'skill-001',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "skill-001" */ '@/pages/skill-001.vue')
    },
    {
        path: '/numberscroll',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'numberscroll',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "numberscroll" */ '@/pages/numberscroll.vue')
    },
    {
        path: '/use-component-directly',
        meta: {
            dep: 2,
            needLogin: true,
            title: 'use-component-directly',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "use-component-directly" */ '@/pages/use-component-directly.vue')
    },
    {
        path: '/curve-run',
        meta: {
            dep: 2,
            needLogin: true,
            title: '元素曲线运动',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "curve-run" */ '@/pages/curve-run.vue')
    },
    {
        path: '/shopping-ball',
        meta: {
            dep: 2,
            needLogin: true,
            title: '添加到购物车动画',
            role: ['superadmin', 'admin', 'common']
        },
        component: () => import(/* webpackChunkName: "shopping-ball" */ '@/pages/shopping-ball.vue')
    }
];

export default roleRouter;
