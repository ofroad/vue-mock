import Vue from 'vue';
import './utils/rem';
import App from './App.vue';
import router from './router/';
import store from './vuex/store';
//import axios from 'axios';
import './mock.js';

Vue.config.productionTip = false;
//注释1
/*
 注释2
*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// console.log('axios===', axios);
// console.log('axios.get===', axios.get);
// console.log('axios create===', axios.create());
console.warn('警告3');
