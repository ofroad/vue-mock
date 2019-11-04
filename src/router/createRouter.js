//根据角色动态创建路由
import VueRouter from 'vue-router';
import router from './index';
import roleRouter from './roleRouter';
import baseRouter from './baseRouter';

const resetRouter = function() {
    //重置路由
    let newRouter = new VueRouter({
        routes: baseRouter
    });
    //这个设置很重要
    router.matcher = newRouter.matcher;
};
const createRouter = function(role) {
    resetRouter();
    const newrouter = roleRouter.filter(v => {
        return v.meta.role.includes(role);
    });
    console.log('筛选后的router===', newrouter);
    router.addRoutes(newrouter);
    return baseRouter.concat(newrouter);
};
export default createRouter;
