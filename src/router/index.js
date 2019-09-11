import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store';
import baseRouter from './baseRouter';
Vue.use(Router);
const router = new Router({
  routes: baseRouter
});

router.beforeEach((to, from, next) => {
  console.log('main.js to===', to);
  console.log('main.js from===', from);
  document.title = to.meta.title;
  if (store.state.isLogin) {
    //登录状态有效
    if (to.name !== 'login') {
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
