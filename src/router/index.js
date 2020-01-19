import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store';
import baseRouter from './baseRouter';
Vue.use(Router);
const router = new Router({
    routes: baseRouter
});

router.beforeEach((to, from, next) => {
    console.log('=========beforeEach========');
    console.log('main.js to===', to);
    console.log('main.js from===', from);

    //存储路由来路
    store.commit('setFrom', from);

    //动态设置页面title
    document.title = to.meta.title;

    //切换路由前重置为0
    store.commit('clearLoading');

    if (store.state.isLogin) {
        //登录状态有效
        if (to.name !== 'login') {
            //动态更新keep-alive的include数据
            // if (from.meta.cachedFor && from.meta.cachedFor.includes(to.name)) {
            //     console.log('符合缓存条件');
            //     store.commit('updateRoutercached', { route: from.name, action: 'add' });
            // } else {
            //     console.log('不符合缓存条件');
            //     store.commit('updateRoutercached', { route: from.name, action: 'delete' });
            // }
            if (from.meta.cachedFor) {
                console.log('===111111===');
                if (from.meta.cachedFor.includes(to.name)) {
                    console.log('10');
                    from.meta.keepAlive = true;
                } else if (!from.meta.cachedFor.includes(to.name)) {
                    console.log('11');
                    from.meta.keepAlive = false;
                }
            }
            //路由继续走
            next();
        } else {
            next('/');
        }
    } else {
        //未登录
        // eslint-disable-next-line prettier/prettier
    if (to.matched.some(v => {return v.meta.needLogin;})) {
            //需要登录后才能访问
            next({
                name: 'login',
                query: {
                    from: to.name,
                    w: '123'
                }
            });
        } else {
            //不需要登录就能访问
            next();
        }
    }
});

export default router;
