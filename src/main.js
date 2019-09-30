import Vue from 'vue';
import './utils/rem';
import App from './App.vue';
import router from './router/';
import store from './vuex/store';
import cookies from 'js-cookie';
import createRouter from './router/createRouter';
//import axios from 'axios';
import './mock.js';

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

Vue.config.productionTip = false;
Vue.prototype.$cookies = cookies;
//注释1
/*
 注释2
*/
console.log('store===', store);
console.log('store.state.moduleA===', store.state.moduleA);
console.log('store.getters===', store.getters['moduleA/doubleCount']);

console.log('=======main.js 刷新页面同步登录状态======');
//刷新页面同步登录状态
cookies.get('login') && store.commit('setLogin', { isLogin: true, age: 111 });

//刷新页面同步角色路由
const role = cookies.get('role');
role && store.commit('setRole', { role: role, age: 111 });
role && createRouter(role);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// console.log('axios===', axios);
// console.log('axios.get===', axios.get);
// console.log('axios create===', axios.create());
console.warn('警告3');
